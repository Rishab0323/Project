# from google.colab import drive
# drive.mount('/content/drive')

# === Setup: Mount Drive and Install Dependencies ===
from google.colab import drive

drive.mount('/content/drive')

#!pip install scikit-learn

# === Load and Preprocess Images, Extract Features using VGG16 ===
import cv2
import numpy as np
import matplotlib.pyplot as plt
import os
from tensorflow.keras.applications import VGG16
from tensorflow.keras.models import Model

def image_preprocessing(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    norm_img = cv2.normalize(blur, None, alpha=0, beta=255, norm_type=cv2.NORM_MINMAX)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced_img = clahe.apply(norm_img)
    _, segmented_img = cv2.threshold(enhanced_img, 128, 255, cv2.THRESH_BINARY)
    return segmented_img.astype(np.uint8)

def feature_extraction(segmented_img):
    segmented_img_rgb = cv2.cvtColor(segmented_img, cv2.COLOR_GRAY2RGB)
    segmented_img_resized = cv2.resize(segmented_img_rgb, (256, 256))
    base_model = VGG16(weights='imagenet', include_top=False, input_shape=(256, 256, 3))
    feature_extractor = Model(inputs=base_model.input, outputs=base_model.get_layer('block5_pool').output)
    input_for_model = np.expand_dims(segmented_img_resized, axis=0)
    features = feature_extractor.predict(input_for_model)
    return features

def process_dataset(input_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    for subfolder in os.listdir(input_dir):
        subfolder_path = os.path.join(input_dir, subfolder)
        if not os.path.isdir(subfolder_path):
            continue
        feature_list = []
        for image_name in os.listdir(subfolder_path):
            image_path = os.path.join(subfolder_path, image_name)
            if not image_name.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tif', '.tiff')):
                continue
            image = cv2.imread(image_path)
            if image is None:
                continue
            segmented_img = image_preprocessing(image)
            features = feature_extraction(segmented_img)
            feature_list.append(features.flatten())
        feature_array = np.array(feature_list)
        output_file_path = os.path.join(output_dir, f"{subfolder}_features.npy")
        np.save(output_file_path, feature_array)

# === Run Feature Extraction (only run once to create .npy files) ===
input_directory = "/content/drive/MyDrive/eye classification dataset"
output_directory = "/content/drive/MyDrive/eye classification dataset/output_eye_disease"
process_dataset(input_directory, output_directory)

# === Load Extracted Features (.npy) ===
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score

output_directory = "/content/drive/MyDrive/eye classification dataset/output_eye_disease"

X, y = [], []
label_names = []

for idx, file_name in enumerate(os.listdir(output_directory)):
    if file_name.endswith('.npy'):
        label = file_name.replace('_features.npy', '')
        label_names.append(label)
        path = os.path.join(output_directory, file_name)
        features = np.load(path)
        X.append(features)
        y.extend([idx] * features.shape[0])

X = np.concatenate(X, axis=0)
y = np.array(y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# === SVM Training ===
from sklearn.svm import SVC

clf = SVC(kernel='linear')
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)
print("\nSVM Classification Report:")
print(classification_report(y_test, y_pred, target_names=label_names))
print(f"SVM Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")
   



from google.colab import drive
drive.mount('/content/drive')

import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import classification_report, accuracy_score

output_directory = "/content/drive/MyDrive/eye classification dataset/output_eye_disease"

X, y = [], []
label_names = []
valid_labels = []

for idx, file_name in enumerate(os.listdir(output_directory)):
    if file_name.endswith('.npy'):
        label = file_name.replace('_features.npy', '')
        path = os.path.join(output_directory, file_name)
        features = np.load(path)

        # Check for empty array
        if features.size == 0:
            print(f"⚠️ Skipping empty features in: {file_name}")
            continue

        # Reshape if only 1 image
        if features.ndim == 1:
            features = features.reshape(1, -1)

        X.append(features)
        y.extend([len(valid_labels)] * features.shape[0])
        valid_labels.append(label)  # Only add label if data is valid

# Convert and check
if not X:
    raise ValueError("No valid feature data loaded. Please check your .npy files.")

X = np.concatenate(X, axis=0)
y = np.array(y)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train SVM
clf = SVC(kernel='linear')
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)

print("\n✅ SVM Classification Report:")
print(classification_report(y_test, y_pred, target_names=valid_labels))
print(f"✅ SVM Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")
