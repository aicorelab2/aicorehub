// ═══════════════════════════════════════════════════════════
//  DATA — Edit only this section to update your portfolio
// ═══════════════════════════════════════════════════════════

export const DATA = {

  // ── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      title: "Brain Disorder Classification",
      desc: "Vision Transformer model for brain MRI classification.",
      shortHighlights: [
        "Achieved 86.85% test accuracy in 60 epochs",
        "Built custom ViT with Shifted Patch Tokenization",
        "Outperformed EfficientNetB3 and VGG16 baselines"
      ],
      keyMetric: "86.85% Accuracy",
      tags: ["Vision Transformer", "EfficientNetB3", "VGG16", "Medical AI", "TensorFlow"],
      link: "https://github.com/Mindbender66/Vision-Transformers",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 3 Models · 86.85% Test Accuracy",
        about:
          "A comparative deep learning study that benchmarks three architectures — EfficientNetB3 (CNN), VGG16, and a custom Vision Transformer (ViT) — on 4-class brain MRI classification: atrofi (brain atrophy), iskemi (ischemia), normal, and WMD (White Matter Disease). The ViT implements two research-grade techniques — Shifted Patch Tokenization (SPT) and Locality Self-Attention (LSA) — and is the star performer at 86.85% test accuracy after 60 epochs.",

        metrics: [
          { icon: "fas fa-brain", value: 3, suffix: "", label: "Architectures" },
          { icon: "fas fa-redo-alt", value: 60, suffix: "", label: "ViT Epochs" },
          { icon: "fas fa-percentage", value: 87, suffix: "%", label: "Test Accuracy" },
          { icon: "fas fa-th-large", value: 144, suffix: "", label: "Patch Tokens" },
        ],

        datasets: [
          {
            label: "Brain Disorder Dataset",
            source: "Kaggle · sarathvalmiki",
            classes: "atrofi · iskemi · normal · WMD",
            url: "https://www.kaggle.com/datasets/sarathvalmiki/brain-disorder",
            split: "Train / Validation / Test",
            format: ".jpg · 72×72 MRI scans",
          },
        ],

        pipelines: [
          {
            name: "🔵 EfficientNetB3",
            optimizer: "Adamax (lr=0.001)",
            loss: "Categorical Crossentropy",
            batchSize: 16,
            output: "atrofi / iskemi / normal / WMD",
            file: "CNN.ipynb",
            model: "EfficientNetB3 (ImageNet)",
          },
          {
            name: "🟠 VGG16",
            optimizer: "Adam (lr=0.0001)",
            loss: "Categorical Crossentropy",
            batchSize: 10,
            output: "atrofi / iskemi / normal / WMD",
            file: "VGG.ipynb",
            model: "brain_tumor_VGG16.h5",
          },
          {
            name: "⭐ ViT (Custom)",
            optimizer: "AdamW + WarmUp Cosine",
            loss: "Categorical Crossentropy",
            batchSize: 256,
            output: "atrofi / iskemi / normal / WMD",
            file: "ViT.ipynb",
            model: "86.85% test accuracy",
          },
        ],

        architecture: [
          { name: "Input", info: "72 × 72 MRI image", color: "rgba(0,245,255,0.9)" },
          { name: "Shifted Patch Tokenizer", info: "4-directional diagonal shifts → concatenated → 6×6 patch extraction", color: "rgba(0,200,255,0.82)" },
          { name: "Patch Embedding", info: "144 patches × 64-dim projection + CLS token", color: "rgba(60,170,255,0.78)" },
          { name: "Transformer Block ×8", info: "LSA (4 heads, learnable τ, diagonal mask) → MLP", color: "rgba(120,120,255,0.78)" },
          { name: "MLP Head", info: "LayerNorm → Dense(2048, GELU) → Dense(1024, GELU) → Dropout", color: "rgba(168,85,247,0.82)" },
          { name: "Output", info: "Dense(4, softmax) — 4-class disorder prediction", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "⭐ ViT achieves 86.85% test accuracy — outperforms both CNN baselines on this medical task",
          "Shifted Patch Tokenization (SPT): 4-directional image shifts enrich local patch context before tokenization",
          "Locality Self-Attention (LSA): learnable temperature τ + diagonal mask sharpens spatial attention focus",
          "WarmUp Cosine Annealing LR schedule — stable convergence from loss 4.49 → 0.32 across 60 epochs",
          "EfficientNetB3 (frozen ImageNet base) + BatchNorm + L1/L2 Dense head — fast 5-epoch convergence",
          "VGG16 dual-pipeline: original + augmented data (±30° rotation, shift, shear, zoom, flip) combined via generator",
          "Class-imbalanced dataset (normal = 83%) — F1-score + confusion matrix used alongside accuracy for evaluation",
          "Dataset: 4 classes — atrofi (264), iskemi (72), normal (1,756), WMD (36) — from Kaggle",
        ],

        techStack: [
          "TensorFlow", "Keras", "tensorflow-addons", "EfficientNetB3",
          "VGG16", "OpenCV", "Pillow", "scikit-learn",
          "Matplotlib", "Seaborn", "NumPy", "Pandas", "Google Colab",
        ],
      },
    },
    {
      title: "Breast Cancer Classification",
      desc: "Logistic Regression classifier for Wisconsin Breast Cancer dataset evaluation.",
      shortHighlights: [
        "Achieved 94.9% accuracy with 20-fold CV",
        "Full EDA with per-feature groupings and heatmaps",
        "Identified Bare Nuclei as highest risk predictor"
      ],
      keyMetric: "94.9% Accuracy",
      tags: ["Logistic Regression", "scikit-learn", "EDA", "Classification", "Healthcare"],
      link: "https://github.com/Mindbender66/Breast-Cancer",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 683 Samples · ~94.9% Accuracy",
        about:
          "A binary classification project on the Wisconsin Breast Cancer dataset that predicts whether a tumor is Benign (Class 2) or Malignant (Class 4) from 9 cytological features scored 1–10. Includes full EDA with per-feature groupby bar/pie charts, an RdBu correlation heatmap, an 80/20 train-test split, Logistic Regression training, a manually verified confusion matrix (83+47 correct out of 137), and 20-fold Cross-Validation for robust accuracy estimation.",

        metrics: [
          { icon: "fas fa-database", value: 683, suffix: "", label: "Samples" },
          { icon: "fas fa-columns", value: 9, suffix: "", label: "Features" },
          { icon: "fas fa-percentage", value: 95, suffix: "%", label: "Split Accuracy" },
          { icon: "fas fa-sync-alt", value: 20, suffix: "", label: "CV Folds" },
        ],

        datasets: [
          {
            label: "Wisconsin Breast Cancer Dataset",
            source: "UCI / Kaggle · classic benchmark",
            classes: "Class 2 (Benign) · Class 4 (Malignant)",
            url: "https://github.com/Mindbender66/Breast-Cancer",
            split: "80% Train / 20% Test (random_state=0)",
            format: "breast_cancer.csv · 683 rows × 10 cols",
          },
        ],

        pipelines: [
          {
            name: "🔵 Training",
            optimizer: "N/A (Logistic Regression)",
            loss: "Log Loss (built-in)",
            batchSize: "Full batch",
            output: "Class 2 (Benign) / Class 4 (Malignant)",
            file: "breast cancer.py",
            model: "LogisticRegression(random_state=0)",
          },
          {
            name: "🔁 Cross-Validation",
            optimizer: "20-fold CV",
            loss: "Accuracy score per fold",
            batchSize: "N/A",
            output: "Mean accuracy across 20 folds",
            file: "breast cancer.py",
            model: "cross_val_score (cv=20)",
          },
        ],

        architecture: [
          { name: "Raw Data", info: "breast_cancer.csv — 683 rows × 10 columns, all int64, 0 nulls", color: "rgba(0,245,255,0.9)" },
          { name: "EDA", info: "groupby('Class').mean() bar+pie charts for all 9 features; RdBu heatmap", color: "rgba(0,210,255,0.82)" },
          { name: "Train-Test Split", info: "80% train / 20% test — random_state=0 — stratified binary classes", color: "rgba(60,170,255,0.78)" },
          { name: "Logistic Regression", info: "sklearn LogisticRegression(random_state=0) — fits on x_train, y_train", color: "rgba(120,120,255,0.78)" },
          { name: "Confusion Matrix", info: "TP=83, FP=3, FN=4, TN=47 → accuracy=(83+47)/137 = 94.89%", color: "rgba(168,85,247,0.82)" },
          { name: "20-Fold CV", info: "cross_val_score(cv=20) on training set — robust accuracy estimation", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "~94.9% accuracy manually verified from confusion matrix: (83+47) / (83+47+3+4) = 130/137",
          "20-fold Cross-Validation — more robust than a single 80/20 split on this 683-row dataset",
          "Full EDA: per-feature groupby bar + pie charts for all 9 cytological features vs Class",
          "RdBu annotated correlation heatmap — reveals multi-feature collinearity patterns",
          "All 9 features higher in malignant tumors — groupby mean analysis confirms across every measure",
          "Bare Nuclei strongly correlated with malignancy — frequent 10-scores in Class 4 samples",
          "Pre-cleaned Wisconsin dataset — zero missing values, all int64 — ideal classification baseline",
          "Companion to Breast Cancer CNN project — same medical problem, tabular vs imaging approach",
        ],

        techStack: [
          "Python", "pandas", "NumPy", "matplotlib",
          "seaborn", "scikit-learn",
        ],
      },
    },
    {
      title: "Medical Image Classification",
      desc: "Custom 4-layer CNN for breast ultrasound and brain MRI classification.",
      shortHighlights: [
        "Processed and augmented medical imaging data",
        "Trained robust 4-block CNN architecture from scratch",
        "Maintained two generalized tumor detection pipelines"
      ],
      keyMetric: "4-Layer CNN",
      tags: ["Deep Learning", "CNN", "PyTorch", "Medical AI"],
      link: "https://github.com/Mindbender66/Medical-Image-Classification-DeepLearning",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 2 Pipelines · Public Repository",
        about:
          "Two independent CNN pipelines in one repository: Breast Cancer Classification (bc_code.py) using Adam optimizer, and Brain Tumor Classification (bt_code.py) using RMSprop. Both share the same 4-block CNN architecture (32→64→128→256 filters) trained on 150×150 grayscale medical images over 50 epochs with data augmentation.",

        metrics: [
          { icon: "fas fa-layer-group", value: 4, suffix: "", label: "Conv Blocks" },
          { icon: "fas fa-redo-alt", value: 50, suffix: "", label: "Epochs" },
          { icon: "fas fa-expand", value: 150, suffix: "px", label: "Input Size" },
          { icon: "fas fa-code-branch", value: 2, suffix: "", label: "Pipelines" },
        ],

        datasets: [
          {
            label: "Breast Ultrasound Images",
            source: "Kaggle · aryashah2k",
            classes: "benign · malignant · normal",
            url: "https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset",
            split: "70% Train / 30% Test (stratified)",
            format: ".png · 150×150 grayscale",
          },
          {
            label: "Brain Tumor MRI Dataset",
            source: "Kaggle · masoudnickparvar",
            classes: "glioma · meningioma · pituitary",
            url: "https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset",
            split: "70% Train / 30% Test (stratified)",
            format: ".jpg · 150×150 grayscale",
          },
        ],

        pipelines: [
          {
            name: "Breast Cancer (BC)",
            optimizer: "Adam",
            loss: "Categorical Crossentropy",
            batchSize: 32,
            output: "benign / malignant / normal",
            file: "bc_code.py",
            model: "BCmodel.h5",
          },
          {
            name: "Brain Tumor (BT)",
            optimizer: "RMSprop (lr=0.001)",
            loss: "Categorical Crossentropy",
            batchSize: 32,
            output: "glioma / meningioma / pituitary",
            file: "bt_code.py",
            model: "BTmodel.h5",
          },
        ],

        architecture: [
          { name: "Input", info: "150 × 150 × 1  —  Grayscale", color: "rgba(0,245,255,0.9)" },
          { name: "Conv Block 1", info: "Conv2D(32, 3×3, relu)  →  MaxPooling2D(2×2)", color: "rgba(0,220,255,0.75)" },
          { name: "Conv Block 2", info: "Conv2D(64, 3×3, relu)  →  MaxPooling2D(2×2)", color: "rgba(60,180,255,0.75)" },
          { name: "Conv Block 3", info: "Conv2D(128, 3×3, relu) →  MaxPooling2D(2×2)", color: "rgba(120,130,255,0.75)" },
          { name: "Conv Block 4", info: "Conv2D(256, 3×3, relu) →  MaxPooling2D(2×2)", color: "rgba(168,85,247,0.8)" },
          { name: "Flatten + FC", info: "Flatten → Dense(512) → Dropout(0.5) → Dense(256) → Dropout(0.5)", color: "rgba(190,60,220,0.8)" },
          { name: "Output", info: "Dense(3, softmax)  —  3-class prediction", color: "rgba(220,40,160,0.85)" },
        ],

        highlights: [
          "4-block CNN from scratch — Conv2D(32→64→128→256) with MaxPooling after each block",
          "BC pipeline: Adam optimizer · Benign, Malignant, Normal ultrasound classification",
          "BT pipeline: RMSprop (lr=0.001) · Glioma, Meningioma, Pituitary MRI classification",
          "Augmentation on train set only: ±20° rotation, shift, shear, zoom, horizontal flip",
          "Double Dropout(0.5) on FC layers — prevents overfitting on limited medical data",
          "Stratified 70/30 split — balanced class representation across train and test sets",
          "Visualizations: learning curves, loss curves, confusion matrix, heatmap, scatter, histogram",
        ],

        techStack: [
          "TensorFlow", "Keras", "Pillow (PIL)", "OpenCV",
          "scikit-learn", "Matplotlib", "Seaborn", "NumPy", "Pandas", "Google Colab",
        ],
      },

    },
    {
      title: "Heart Attack Prediction",
      desc: "Classic ML classifier benchmarking on the Heart Disease dataset.",
      shortHighlights: [
        "Examined 4 separate algorithms including LogReg and KNN",
        "Best performer SVM achieved 75.41% test accuracy",
        "Plotted ROC, AUC, and Seaborn heatmaps for robust evaluation"
      ],
      keyMetric: "75.41% Accuracy",
      tags: ["SVM", "Decision Tree", "KNN", "scikit-learn", "Healthcare"],
      link: "https://github.com/Mindbender66/heart-attack-prediction",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 4 Models · SVM Best @ 75.41%",
        about:
          "A multi-model ML benchmarking project on the Heart Disease dataset (303 patients, 14 clinical features). Trains Decision Tree, SVM (Linear Kernel), Logistic Regression, and KNN classifiers on an 80/20 split and evaluates each using Classification Reports, Seaborn confusion matrix heatmaps, and ROC Curve + AUC scores. The dataset is well-balanced (54.5% positive / 45.5% negative), requiring no resampling.",

        metrics: [
          { icon: "fas fa-users", value: 303, suffix: "", label: "Patients" },
          { icon: "fas fa-columns", value: 14, suffix: "", label: "Features" },
          { icon: "fas fa-robot", value: 4, suffix: "", label: "Models" },
          { icon: "fas fa-percentage", value: 75, suffix: "%", label: "Best Accuracy" },
        ],

        datasets: [
          {
            label: "Heart Disease Dataset",
            source: "UCI / Kaggle · classic benchmark",
            classes: "output: 1 = Heart Attack Risk · 0 = No Risk",
            url: "https://github.com/Mindbender66/heart-attack-prediction",
            split: "80% Train / 20% Test",
            format: "heart.csv · 303 rows × 14 cols",
          },
        ],

        pipelines: [
          {
            name: "🏆 SVM (Linear)",
            optimizer: "Linear Kernel SVC",
            loss: "Hinge loss",
            batchSize: "Full batch",
            output: "1 (Risk) / 0 (No Risk)",
            file: "heart_attack_prediction.ipynb",
            model: "75.41% accuracy",
          },
          {
            name: "🌿 Decision Tree",
            optimizer: "Gini impurity",
            loss: "Classification",
            batchSize: "Full batch",
            output: "1 (Risk) / 0 (No Risk)",
            file: "heart_attack_prediction.ipynb",
            model: "72.13% accuracy",
          },
        ],

        architecture: [
          { name: "Raw Data", info: "heart.csv — 303 rows × 14 cols · balanced 54.5% / 45.5%", color: "rgba(0,245,255,0.9)" },
          { name: "EDA", info: "Distributions, null/zero checks, class balance verification", color: "rgba(0,210,255,0.82)" },
          { name: "Train-Test Split", info: "80% train / 20% test — stratified binary classes", color: "rgba(60,170,255,0.78)" },
          { name: "4 Classifiers", info: "DecisionTree · SVM(Linear) · LogisticRegression · KNN", color: "rgba(120,120,255,0.78)" },
          { name: "Evaluation", info: "Classification Report · Confusion Matrix heatmap · ROC + AUC", color: "rgba(168,85,247,0.82)" },
          { name: "Best Model", info: "SVM Linear Kernel — 75.41% accuracy, highest precision & recall", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "🏆 SVM (Linear Kernel) best performer — 75.41% accuracy, Precision 0.78, Recall 0.75",
          "KNN lowest performer — feature scaling (StandardScaler) would significantly improve it",
          "Logistic Regression convergence warning — fixed by setting max_iter=1000",
          "ROC Curve + AUC score computed for all 4 models — allows threshold tuning",
          "Confusion matrix visualized as Seaborn annotated heatmap for each model",
          "Balanced dataset (165 positive / 138 negative) — no SMOTE or class weighting needed",
          "14 clinical features: age, cholesterol, chest pain type, max HR, exercise angina, etc.",
        ],

        techStack: [
          "Python", "pandas", "NumPy", "matplotlib",
          "seaborn", "scikit-learn",
        ],
      },
    },
    {
      title: "Loan Prediction — Multi-Model Benchmark",
      desc: "Loan approval prediction using multiple ML models & dual encodings.",
      shortHighlights: [
        "Engineered features using Cramér's V correlation metric",
        "Achieved ~80% target accuracy using Logistic Regression",
        "Built complete reproducible notebook with 6 diverse algorithms"
      ],
      keyMetric: "~80% Accuracy",
      tags: ["Random Forest", "Logistic Regression", "Cramér's V", "scikit-learn", "Finance"],
      link: "https://github.com/Mindbender66/Loan-Prediction-Using-ML",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 6 Models · Logistic Regression Best @ ~80%",
        about:
          "A full multi-model ML pipeline for binary loan approval classification (Y=Approved / N=Rejected) on 615 applications. Standout techniques include Cramér's V correlation analysis for categorical features alongside Pearson, a dual encoding strategy (get_dummies + label mapping), StandardScaler with no data leakage, and a 65/35 train-test split. 5 classifiers and 1 regressor baseline are trained and evaluated with confusion matrices and classification reports.",

        metrics: [
          { icon: "fas fa-file-invoice-dollar", value: 615, suffix: "", label: "Applications" },
          { icon: "fas fa-columns", value: 12, suffix: "", label: "Features" },
          { icon: "fas fa-robot", value: 6, suffix: "", label: "Models" },
          { icon: "fas fa-percentage", value: 80, suffix: "%", label: "Best Accuracy" },
        ],

        datasets: [
          {
            label: "Loan Approval Dataset",
            source: "Kaggle · loan_train.csv",
            classes: "Status: Y = Approved · N = Rejected",
            url: "https://github.com/Mindbender66/Loan-Prediction-Using-ML",
            split: "65% Train / 35% Test (random_state=0)",
            format: "loan.csv · 615 rows × 12 cols",
          },
        ],

        pipelines: [
          {
            name: "⭐ Logistic Reg.",
            optimizer: "LogisticRegression(random_state=0)",
            loss: "Log Loss",
            batchSize: "Full batch",
            output: "Y (Approved) / N (Rejected)",
            file: "Code.py",
            model: "~80% accuracy",
          },
          {
            name: "📈 Linear Reg.",
            optimizer: "LinearRegression (baseline)",
            loss: "MSE",
            batchSize: "Full batch",
            output: "MSE · RMSE · R²",
            file: "Code.py",
            model: "Regression baseline",
          },
        ],

        architecture: [
          { name: "Raw Data", info: "loan.csv — 615 rows × 12 cols · binary target Status (Y/N)", color: "rgba(0,245,255,0.9)" },
          { name: "Correlation", info: "Pearson (numeric) + Cramér's V chi-square (categorical) — full 12×12 matrix", color: "rgba(0,210,255,0.82)" },
          { name: "Dual Encoding", info: "get_dummies for binaries · label mapping for Dependents + Area", color: "rgba(60,170,255,0.78)" },
          { name: "StandardScaler", info: "fit_transform on train · transform on test only (no leakage)", color: "rgba(120,120,255,0.78)" },
          { name: "6 Models", info: "LogReg · DTree · LinearReg · RandomForest · NaiveBayes · SVM", color: "rgba(168,85,247,0.82)" },
          { name: "Best Model", info: "Logistic Regression — ~80% accuracy on loan approval classification", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "⭐ Logistic Regression wins — ~80% accuracy; linear boundary well-suited for binary approval",
          "Cramér's V correlation: chi-square based measure for categorical associations — beyond Pearson",
          "Full 12×12 Cramér's V heatmap reveals hidden categorical collinearity",
          "Dual encoding: get_dummies for Gender/Education/Married/Status, label mapping for Dependents/Area",
          "StandardScaler applied correctly — fit on train, transform both (no test leakage)",
          "Credit History is the strongest predictor — Credit_History=0 → almost certain rejection",
          "Linear Regression used as regression baseline: MSE, RMSE, R² reported alongside classifiers",
          "Extends an earlier EDA notebook — this repo adds full predictive modeling on top",
        ],

        techStack: [
          "Python", "pandas", "NumPy", "matplotlib",
          "seaborn", "scipy", "scikit-learn",
        ],
      },
    },
    {
      title: "Titanic Survival Classification",
      desc: "Random Forest pipeline predicting survival using refined missing-data tactics.",
      shortHighlights: [
        "Addressed missing data by strategically dropping sparse features",
        "One-hot encoded titles and imputed core demographics correctly",
        "Delivered and validated scalable Random Forest pipeline"
      ],
      keyMetric: "Feature Engineering",
      tags: ["Random Forest", "Feature Engineering", "pandas", "scikit-learn", "Classification"],
      link: "https://github.com/Mindbender66/Titanic-Classification",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · Random Forest · Feature Engineering Pipeline",
        about:
          "A clean ML pipeline for Titanic survival prediction (Survived: 0=Died, 1=Survived) using a Random Forest Classifier. Key steps: strategic missing value handling (drop Cabin at 78% missing, median-fill Age, mode-fill Embarked), passenger title extraction from the Name column (Mr/Mrs/Miss/Master/Dr), one-hot encoding of Sex with drop_first=True, and an 80/20 train-test split evaluated with accuracy score.",

        metrics: [
          { icon: "fas fa-users", value: 891, suffix: "", label: "Passengers" },
          { icon: "fas fa-columns", value: 5, suffix: "", label: "Features Used" },
          { icon: "fas fa-tree", value: 1, suffix: "", label: "Model" },
          { icon: "fas fa-tags", value: 2, suffix: "", label: "Classes" },
        ],

        datasets: [
          {
            label: "Titanic Dataset",
            source: "Kaggle · classic competition",
            classes: "Survived: 1 = Survived · 0 = Died",
            url: "https://github.com/Mindbender66/Titanic-Classification",
            split: "80% Train / 20% Test (random_state=42)",
            format: "titanic.csv · 891 rows × 12 cols",
          },
        ],

        pipelines: [
          {
            name: "🧹 Data Cleaning",
            optimizer: "Drop / Median / Mode fill",
            loss: "N/A",
            batchSize: "N/A",
            output: "Cleaned DataFrame",
            file: "Titanic_Classification.ipynb",
            model: "Cabin dropped · Age median · Embarked mode",
          },
          {
            name: "🌲 Random Forest",
            optimizer: "RandomForestClassifier()",
            loss: "Gini impurity",
            batchSize: "Full batch",
            output: "Survived: 1 / 0",
            file: "Titanic_Classification.ipynb",
            model: "accuracy_score evaluation",
          },
        ],

        architecture: [
          { name: "Raw Data", info: "titanic.csv — 891 rows × 12 cols · Cabin 78% missing", color: "rgba(0,245,255,0.9)" },
          { name: "Missing Value Handler", info: "Drop Cabin · fillna(median) for Age · fillna(mode) for Embarked", color: "rgba(0,210,255,0.82)" },
          { name: "Feature Engineering", info: "passenger_title extracted via Name.split(',')[1].split('.')[0].strip()", color: "rgba(60,170,255,0.78)" },
          { name: "Encoding", info: "pd.get_dummies(drop_first=True) on Sex → Sex_male column", color: "rgba(120,120,255,0.78)" },
          { name: "Random Forest", info: "Features: Pclass · Age · Sex · SibSp · Parch · (80/20 split)", color: "rgba(168,85,247,0.82)" },
          { name: "Evaluation", info: "accuracy_score on held-out 20% test set", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "Cabin dropped at 78% missing — imputation would add more noise than signal",
          "Median fill for Age — robust to outliers (youngest passenger: 2 months old)",
          "Passenger title extracted: Mr / Mrs / Miss / Master / Dr encode age + gender + class simultaneously",
          "drop_first=True in get_dummies — avoids dummy variable trap, good practice even for tree models",
          "Random Forest: robust to outliers in Fare, handles non-linear survival patterns natively",
          "No feature scaling needed — Random Forest is scale-invariant unlike linear/SVM models",
          "Companion to Titanic EDA notebook — that repo explores patterns; this adds predictive modeling",
        ],

        techStack: [
          "Python", "pandas", "scikit-learn",
        ],
      },
    },
    {
      title: "Text Analysis — NLP Sentiment & Readability",
      desc: "Automated NLP pipeline for sentiment and readability scoring.",
      shortHighlights: [
        "Scraped web content dynamically using BeautifulSoup4",
        "Measured 15 linguistic features including complex Fog Index",
        "Output clean automated statistics to Excel formats"
      ],
      keyMetric: "15 NLP Metrics",
      tags: ["NLP", "BeautifulSoup", "NLTK", "TextBlob", "Web Scraping"],
      link: "https://github.com/Mindbender66/text-analysis",
      type: "github",
      clickable: true,
      requestAccess: true,
      detail: {
        status: "Completed · 15 Metrics · Excel Output",
        about:
          "An automated NLP pipeline that reads article URLs from Input.xlsx, scrapes and saves article text using BeautifulSoup, then computes 15 linguistic and sentiment metrics per article — including Fog Index (readability), TextBlob Polarity/Subjectivity, complex word %, syllable counts via the CMU Pronouncing Dictionary, and personal pronoun counts. All results are exported to a clean Output.xlsx file. Supports both local Python execution and Google Colab.",

        metrics: [
          { icon: "fas fa-chart-bar", value: 15, suffix: "", label: "Metrics" },
          { icon: "fas fa-link", value: 1, suffix: "+", label: "Articles / Run" },
          { icon: "fas fa-file-excel", value: 1, suffix: "", label: "Excel Output" },
          { icon: "fas fa-brain", value: 4, suffix: "", label: "NLP Libraries" },
        ],

        datasets: [
          {
            label: "Custom URL Input List",
            source: "User-provided · Input.xlsx",
            classes: "URL_ID · URL — any article URLs",
            url: "https://github.com/Mindbender66/text-analysis",
            split: "N/A — full article text extracted per URL",
            format: "Input.xlsx → Output.xlsx · .txt article files",
          },
        ],

        pipelines: [
          {
            name: "🕷️ Scraping",
            optimizer: "BeautifulSoup4 + Requests",
            loss: "N/A",
            batchSize: "Per URL",
            output: "Extracted_Articles/*.txt",
            file: "text_analysis.py",
            model: "HTML → clean text extraction",
          },
          {
            name: "📊 Analysis",
            optimizer: "NLTK · TextBlob · CMU Dict",
            loss: "N/A",
            batchSize: "Per article",
            output: "Output.xlsx — 15 metrics per row",
            file: "text_analysis.py",
            model: "15 linguistic metrics",
          },
        ],

        architecture: [
          { name: "Input", info: "Input.xlsx — URL_ID + URL columns", color: "rgba(0,245,255,0.9)" },
          { name: "Web Scraping", info: "requests.get → BeautifulSoup4 HTML parse → clean text saved to .txt", color: "rgba(0,210,255,0.82)" },
          { name: "Sentiment Analysis", info: "TextBlob → Polarity (-1 to +1) + Subjectivity (0 to 1) per article", color: "rgba(60,170,255,0.78)" },
          { name: "Readability Metrics", info: "Fog Index · Avg sentence length · Complex word % · Word count", color: "rgba(120,120,255,0.78)" },
          { name: "Syllable & Pronoun", info: "CMU Pronouncing Dict (NLTK) · regex-based personal pronoun counter", color: "rgba(168,85,247,0.82)" },
          { name: "Output", info: "Output.xlsx — 15 metrics per article row · auto-exported via openpyxl", color: "rgba(220,40,160,0.88)" },
        ],

        highlights: [
          "Processes any list of article URLs — scrapes, cleans, and analyzes at scale via Input.xlsx",
          "15 computed metrics: Polarity, Subjectivity, Fog Index, Complex Word %, Syllable/Word, and more",
          "TextBlob for sentiment: Polarity (-1 negative → +1 positive), Subjectivity (0 objective → 1 subjective)",
          "Fog Index readability: higher score = harder to read (targets educated adult benchmark ~12)",
          "CMU Pronouncing Dictionary (NLTK) for syllable counting — more accurate than simple heuristics",
          "Saves each article as .txt to Extracted_Articles/ folder before analysis — auditable pipeline",
          "Runs in Google Colab (Colab link provided) — no local setup needed for quick execution",
          "Some URLs may fail (bot protection / JS rendering) — HTTP failures are logged and skipped",
        ],

        techStack: [
          "Python", "BeautifulSoup4", "Requests",
          "NLTK", "TextBlob", "pandas", "openpyxl", "Google Colab",
        ],
      },
    },
  ],

  // ── DATASETS ─────────────────────────────────────────────
  datasets: [
    { title: "Car Sales Analysis", desc: "Comprehensive dataset for automotive market trends and pricing predictions.", link: "#", type: "kaggle" },
    { title: "Fraud Detection", desc: "Anonymized financial transactions for training robust fraud detection models.", link: "#", type: "kaggle" },
    { title: "Cyberbullying Detection", desc: "Labeled social media data for identifying toxic behavior and harassment.", link: "#", type: "kaggle" },
    { title: "HR Analytics", desc: "Employee performance and turnover metrics for organizational behavior research.", link: "#", type: "kaggle" },
    { title: "Airline Satisfaction", desc: "Survey data covering passenger experiences, delays, and service quality ratings.", link: "#", type: "kaggle" },
    { title: "Supermarket Sales", desc: "Historical sales records from multiple branches for retail trend analysis.", link: "#", type: "kaggle" },
    { title: "Brain Tumor Detection", desc: "Curated medical imaging dataset for computer vision applications in healthcare.", link: "#", type: "kaggle" },
    { title: "Autism Screening", desc: "Behavioral features for early detection and clinical autism screening research.", link: "#", type: "kaggle" },
  ],

  // ── NOTEBOOKS ────────────────────────────────────────────
  notebooks: [
    { title: "Deep Learning Walkthrough", desc: "Step-by-step implementation of Neural Networks using TensorFlow and Keras from scratch.", link: "#", type: "colab" },
    { title: "EDA Masterclass", desc: "Comprehensive exploratory data analysis using Pandas, Seaborn, and Plotly.", link: "#", type: "colab" },
    { title: "Feature Engineering Playbook", desc: "Hands-on techniques for transforming raw data into high-quality ML features.", link: "#", type: "colab" },
    { title: "Reinforcement Learning Basics", desc: "Interactive RL environments with Gym — DQN and policy gradient implementations.", link: "#", type: "colab" },
    { title: "NLP with Transformers", desc: "Fine-tuning BERT and GPT-2 for classification, summarization, and Q&A tasks.", link: "#", type: "colab" },
  ],

  // ── DOCS ─────────────────────────────────────────────────
  docs: [
    { title: "SQL Mastery Notes", desc: "Comprehensive guide to advanced SQL queries, joins, indexes, and database optimization.", link: "#", type: "pdf" },
    { title: "ML Theory Paper", desc: "Research notes on convergence rates in stochastic gradient descent algorithms.", link: "#", type: "pdf" },
    { title: "Study Roadmap", desc: "Curated learning path for mastering Data Science and ML from scratch to advanced.", link: "#", type: "pdf" },
    { title: "Statistics Cheatsheet", desc: "Quick-reference covering probability, hypothesis testing, and regression fundamentals.", link: "#", type: "pdf" },
    { title: "Deep Learning Notes", desc: "Annotated research summaries covering CNNs, RNNs, attention mechanisms, and transformers.", link: "#", type: "pdf" },
  ],
};

export const PREVIEW_COUNT = 3;

export const BTN_CONFIG = {
  github: { cls: 'btn-c', icon: 'fab fa-github', label: 'View Source' },
  kaggle: { cls: 'btn-c', icon: 'fab fa-kaggle', label: 'Kaggle Dataset' },
  colab: { cls: '', icon: '', label: '' },
  pdf: { cls: 'btn-c', icon: 'fas fa-file-pdf', label: 'View PDF' },
};
