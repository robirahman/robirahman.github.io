// ml.js — Machine Learning vocabulary data for Data Science Learning App
// Each entry: id, term, category, shortDef, fullDef, whenToUse, tradeoffs, codeExample, tags

const ML_CATEGORIES = [
  { id: 'supervised',   label: 'Supervised Learning',   color: '#6366f1' },
  { id: 'unsupervised', label: 'Unsupervised Learning', color: '#22d3ee' },
  { id: 'evaluation',  label: 'Model Evaluation',       color: '#f59e0b' },
  { id: 'deep',        label: 'Deep Learning',          color: '#a78bfa' },
];

const ALGORITHM_DATA = [
  // ── SUPERVISED LEARNING ──────────────────────────────────────────────────
  {
    id: 'linear-regression',
    term: 'Linear Regression',
    category: 'supervised',
    shortDef: 'Predicts a continuous output as a weighted sum of input features.',
    fullDef: 'Linear regression fits a hyperplane y = β₀ + β₁x₁ + … + βₙxₙ by minimizing the sum of squared residuals (OLS). It assumes a linear relationship between inputs and output, homoscedastic errors, and no multicollinearity. Ridge and Lasso add L2/L1 regularization to shrink coefficients.',
    whenToUse: 'Predicting continuous values (house prices, sales); interpretability required; as a fast baseline model.',
    tradeoffs: 'Cannot capture non-linear relationships without feature engineering; sensitive to outliers; assumes feature independence.',
    codeExample: `from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
preds = model.predict(X_test)
print(model.coef_, model.intercept_)`,
    tags: ['regression', 'interpretable', 'baseline', 'OLS'],
  },
  {
    id: 'logistic-regression',
    term: 'Logistic Regression',
    category: 'supervised',
    shortDef: 'Classifies by mapping a linear combination of features through a sigmoid to a probability.',
    fullDef: 'Despite the name, logistic regression is a classification algorithm. It estimates P(y=1|x) = σ(βᵀx) where σ is the sigmoid function. Trained by maximizing log-likelihood. Extends to multi-class via one-vs-rest or softmax (multinomial). L1/L2 regularization prevents overfitting.',
    whenToUse: 'Binary or multi-class classification with interpretable probabilities; medical risk scoring; when you need calibrated probability outputs.',
    tradeoffs: 'Assumes linear decision boundary; requires feature scaling; struggles with complex non-linear relationships.',
    codeExample: `from sklearn.linear_model import LogisticRegression
model = LogisticRegression(C=1.0, max_iter=200)
model.fit(X_train, y_train)
proba = model.predict_proba(X_test)[:, 1]`,
    tags: ['classification', 'probabilities', 'interpretable', 'sigmoid'],
  },
  {
    id: 'decision-tree',
    term: 'Decision Tree',
    category: 'supervised',
    shortDef: 'Recursively partitions feature space using axis-aligned splits selected by impurity measures.',
    fullDef: 'A decision tree partitions the input space by greedily choosing splits that minimize Gini impurity (classification) or MSE (regression). Trees are fully grown to low bias but high variance; pruning (max_depth, min_samples_leaf) controls overfitting. CART is the most common algorithm.',
    whenToUse: 'Quick interpretable baseline; feature importance estimation; when data has non-linear/interaction effects and interpretability matters.',
    tradeoffs: 'High variance—small data changes can drastically alter the tree; can overfit; poor extrapolation.',
    codeExample: `from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier(max_depth=5, min_samples_leaf=10)
model.fit(X_train, y_train)
importances = model.feature_importances_`,
    tags: ['classification', 'regression', 'interpretable', 'non-linear'],
  },
  {
    id: 'knn',
    term: 'k-Nearest Neighbors',
    category: 'supervised',
    shortDef: 'Predicts by majority vote (classification) or mean (regression) of k closest training points.',
    fullDef: 'k-NN is a lazy, non-parametric algorithm — it stores the entire training set and makes predictions at query time by finding the k nearest points by distance (Euclidean, Manhattan, Minkowski). No training phase; all computation happens at inference. k controls the bias-variance tradeoff: small k → low bias, high variance.',
    whenToUse: 'Small datasets; anomaly detection; recommendation systems (item-based); when a simple non-parametric approach is needed.',
    tradeoffs: 'Slow inference on large datasets (O(n)); requires feature scaling; sensitive to irrelevant features and high dimensionality (curse of dimensionality).',
    codeExample: `from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(n_neighbors=5, metric='euclidean')
model.fit(X_train, y_train)
preds = model.predict(X_test)`,
    tags: ['classification', 'regression', 'lazy-learning', 'non-parametric'],
  },
  {
    id: 'svm',
    term: 'Support Vector Machine',
    category: 'supervised',
    shortDef: 'Finds the maximum-margin hyperplane separating classes; uses kernel trick for non-linearity.',
    fullDef: 'SVM solves a convex optimization problem to find the hyperplane that maximizes the margin between classes. Support vectors are the training points closest to the boundary. The kernel trick (RBF, polynomial, sigmoid) maps data to higher dimensions implicitly, enabling non-linear boundaries. C controls regularization; γ controls RBF kernel width.',
    whenToUse: 'High-dimensional data (text, genomics); small-to-medium datasets; when kernel methods are appropriate.',
    tradeoffs: 'Slow on large datasets (O(n²–n³) training); kernel and hyperparameter selection is non-trivial; less interpretable.',
    codeExample: `from sklearn.svm import SVC
model = SVC(kernel='rbf', C=1.0, gamma='scale', probability=True)
model.fit(X_train, y_train)
preds = model.predict(X_test)`,
    tags: ['classification', 'regression', 'kernel', 'margin'],
  },
  {
    id: 'naive-bayes',
    term: 'Naive Bayes',
    category: 'supervised',
    shortDef: 'Applies Bayes\' theorem assuming features are conditionally independent given the class.',
    fullDef: 'Naive Bayes computes P(class|features) ∝ P(class) × ∏P(featureᵢ|class) using the naive conditional independence assumption. Gaussian NB assumes normal features; Multinomial NB suits word counts; Bernoulli NB suits binary features. Despite the simplifying assumption, NB works well in practice for text.',
    whenToUse: 'Text classification (spam, sentiment); real-time prediction; when training data is limited; multi-class problems.',
    tradeoffs: 'Independence assumption rarely holds; poor probability calibration; struggles with feature correlations.',
    codeExample: `from sklearn.naive_bayes import GaussianNB
model = GaussianNB()
model.fit(X_train, y_train)
preds = model.predict(X_test)`,
    tags: ['classification', 'probabilistic', 'text', 'fast'],
  },
  {
    id: 'random-forest',
    term: 'Random Forest',
    category: 'supervised',
    shortDef: 'Ensemble of decision trees trained on bootstrap samples with random feature subsets (bagging).',
    fullDef: 'Random Forest builds B decision trees, each on a bootstrap sample of the data, and at each split considers only a random subset of m features (m ≈ √p for classification). Predictions aggregate by majority vote or mean. Bootstrap aggregation (bagging) reduces variance. Out-of-bag (OOB) samples provide a free validation estimate.',
    whenToUse: 'Strong baseline for tabular data; feature importance estimation; robust to outliers and missing values; competitions.',
    tradeoffs: 'Less interpretable than single trees; slower than single tree; memory-intensive for large forests.',
    codeExample: `from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=200, max_features='sqrt', oob_score=True)
model.fit(X_train, y_train)
importances = model.feature_importances_`,
    tags: ['ensemble', 'bagging', 'classification', 'regression', 'robust'],
  },
  {
    id: 'gradient-boosting',
    term: 'Gradient Boosting',
    category: 'supervised',
    shortDef: 'Builds an ensemble sequentially, each tree fitting the residuals of the previous ensemble.',
    fullDef: 'Gradient Boosting fits trees sequentially, where each new tree minimizes the loss function gradient (residuals for MSE). Trees are shallow (weak learners). XGBoost, LightGBM, and CatBoost are optimized implementations adding regularization, leaf-wise growth, and categorical handling. Learning rate (shrinkage) controls each tree\'s contribution.',
    whenToUse: 'State-of-the-art on tabular data; Kaggle competitions; when accuracy > speed; regression and classification.',
    tradeoffs: 'Many hyperparameters to tune; slower training than random forest; can overfit if not regularized.',
    codeExample: `import xgboost as xgb
model = xgb.XGBClassifier(n_estimators=300, max_depth=6, learning_rate=0.05)
model.fit(X_train, y_train, eval_set=[(X_val, y_val)], early_stopping_rounds=20)`,
    tags: ['ensemble', 'boosting', 'XGBoost', 'LightGBM', 'state-of-the-art'],
  },

  // ── UNSUPERVISED LEARNING ─────────────────────────────────────────────────
  {
    id: 'kmeans',
    term: 'K-Means Clustering',
    category: 'unsupervised',
    shortDef: 'Partitions data into k clusters by iteratively assigning points to nearest centroid.',
    fullDef: 'K-Means initializes k centroids randomly (or with k-means++ for better starts), assigns each point to the nearest centroid (Euclidean), then recomputes centroids as cluster means. Iterates until convergence. Minimizes within-cluster sum of squares (WCSS). The elbow method and silhouette score help choose k.',
    whenToUse: 'Customer segmentation; document clustering; image quantization; as preprocessing for other algorithms.',
    tradeoffs: 'Must specify k; sensitive to initialization and outliers; assumes spherical clusters of similar size; struggles with non-convex shapes.',
    codeExample: `from sklearn.cluster import KMeans
model = KMeans(n_clusters=5, init='k-means++', n_init=10, random_state=42)
labels = model.fit_predict(X)
centroids = model.cluster_centers_`,
    tags: ['clustering', 'partitioning', 'centroid', 'unsupervised'],
  },
  {
    id: 'hierarchical-clustering',
    term: 'Hierarchical Clustering',
    category: 'unsupervised',
    shortDef: 'Builds a tree (dendrogram) of clusters by successively merging or splitting groups.',
    fullDef: 'Agglomerative (bottom-up) HC starts with each point as its own cluster and merges the closest pair iteratively. Linkage criteria (single, complete, average, Ward) define inter-cluster distance. The dendrogram can be cut at any level to produce any number of clusters. Divisive (top-down) is rarer.',
    whenToUse: 'When the number of clusters is unknown; exploring hierarchical data structure; small-to-medium datasets.',
    tradeoffs: 'O(n² log n) time and O(n²) space; can\'t revise merges; sensitive to linkage choice and scale.',
    codeExample: `from sklearn.cluster import AgglomerativeClustering
import scipy.cluster.hierarchy as sch
linkage_matrix = sch.linkage(X, method='ward')
sch.dendrogram(linkage_matrix)
model = AgglomerativeClustering(n_clusters=4, linkage='ward')
labels = model.fit_predict(X)`,
    tags: ['clustering', 'dendrogram', 'agglomerative', 'hierarchical'],
  },
  {
    id: 'dbscan',
    term: 'DBSCAN',
    category: 'unsupervised',
    shortDef: 'Density-based clustering that finds arbitrarily shaped clusters and marks outliers as noise.',
    fullDef: 'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) classifies points as core (≥ min_samples neighbors within ε), border, or noise. Clusters are dense regions separated by low-density areas. Does not require specifying k. Robust to outliers. Key params: ε (neighborhood radius) and min_samples.',
    whenToUse: 'Anomaly/outlier detection; geospatial data; clusters of arbitrary shape; when k is unknown.',
    tradeoffs: 'Sensitive to ε and min_samples; struggles with varying density; poor on high-dimensional data.',
    codeExample: `from sklearn.cluster import DBSCAN
model = DBSCAN(eps=0.5, min_samples=5)
labels = model.fit_predict(X)
n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
outliers = X[labels == -1]`,
    tags: ['clustering', 'density', 'outliers', 'noise'],
  },
  {
    id: 'pca',
    term: 'PCA (Principal Component Analysis)',
    category: 'unsupervised',
    shortDef: 'Linear dimensionality reduction by projecting data onto directions of maximum variance.',
    fullDef: 'PCA finds orthogonal directions (principal components) that maximize explained variance. Computed via eigendecomposition of the covariance matrix or SVD of the data matrix. The first k components capture most variance. Used for visualization, noise reduction, and speeding up downstream models. Requires feature scaling first.',
    whenToUse: 'Visualization (to 2D/3D); removing correlated features; speeding up training; noise reduction; before clustering.',
    tradeoffs: 'Only captures linear relationships; components are not interpretable; information loss at lower dimensions.',
    codeExample: `from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
X_scaled = StandardScaler().fit_transform(X)
pca = PCA(n_components=2)
X_2d = pca.fit_transform(X_scaled)
print(pca.explained_variance_ratio_)`,
    tags: ['dimensionality-reduction', 'linear', 'variance', 'SVD'],
  },
  {
    id: 'tsne',
    term: 't-SNE',
    category: 'unsupervised',
    shortDef: 'Non-linear dimensionality reduction preserving local neighborhood structure for visualization.',
    fullDef: 't-SNE (t-distributed Stochastic Neighbor Embedding) models pairwise similarities as probabilities in high-D and low-D space, minimizing KL divergence between them using a t-distribution in 2D (to avoid crowding). Excellent for visualizing clusters. Perplexity (5–50) controls neighborhood size. Results are not reproducible without a fixed seed and vary with perplexity.',
    whenToUse: 'Visualizing high-dimensional data clusters; understanding representation quality in deep learning; EDA.',
    tradeoffs: 'Computationally expensive O(n²); non-deterministic; distances in 2D plot not meaningful; not for new data.',
    codeExample: `from sklearn.manifold import TSNE
tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_2d = tsne.fit_transform(X_scaled)  # X_scaled: PCA first if >50D`,
    tags: ['visualization', 'non-linear', 'dimensionality-reduction', 'embedding'],
  },
  {
    id: 'autoencoders',
    term: 'Autoencoders',
    category: 'unsupervised',
    shortDef: 'Neural network trained to reconstruct its input through a bottleneck, learning compressed representations.',
    fullDef: 'An autoencoder has an encoder (compresses input to latent code z) and a decoder (reconstructs input from z). Trained to minimize reconstruction loss. Variants: sparse AE (sparsity regularization), denoising AE (reconstruct from corrupted input), variational AE (VAE, learns a latent distribution). Used for anomaly detection: high reconstruction error → anomaly.',
    whenToUse: 'Anomaly detection; representation learning; dimensionality reduction for complex data (images, text); generative modeling (VAE).',
    tradeoffs: 'Harder to train than PCA; requires careful architecture tuning; VAE adds KL divergence complexity.',
    codeExample: `import torch.nn as nn
class Autoencoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, 16))
        self.decoder = nn.Sequential(nn.Linear(16, 64), nn.ReLU(), nn.Linear(64, 128))
    def forward(self, x):
        return self.decoder(self.encoder(x))`,
    tags: ['neural-network', 'representation', 'anomaly-detection', 'generative'],
  },

  // ── MODEL EVALUATION ──────────────────────────────────────────────────────
  {
    id: 'accuracy',
    term: 'Accuracy',
    category: 'evaluation',
    shortDef: 'Fraction of correct predictions out of all predictions.',
    fullDef: 'Accuracy = (TP + TN) / (TP + TN + FP + FN). Simple and intuitive, but misleading for imbalanced datasets (e.g., 99% negative class → 99% accuracy by always predicting negative). Always report alongside class distribution. Suitable when classes are balanced.',
    whenToUse: 'Balanced multi-class problems; when all errors are equally costly.',
    tradeoffs: 'Misleading for imbalanced classes; ignores which type of error was made.',
    codeExample: `from sklearn.metrics import accuracy_score
acc = accuracy_score(y_true, y_pred)`,
    tags: ['classification', 'metric', 'simple'],
  },
  {
    id: 'precision-recall',
    term: 'Precision & Recall',
    category: 'evaluation',
    shortDef: 'Precision = TP/(TP+FP); Recall = TP/(TP+FN). Tradeoff controlled by decision threshold.',
    fullDef: 'Precision (positive predictive value): of all predicted positives, how many are truly positive. Recall (sensitivity): of all actual positives, how many are predicted positive. There is a tradeoff: lowering the decision threshold increases recall but decreases precision. The precision-recall curve visualizes this. Use recall when false negatives are costly (cancer detection); use precision when false positives are costly (spam filter).',
    whenToUse: 'Imbalanced datasets; when false positive and false negative costs differ; medical/fraud/spam detection.',
    tradeoffs: 'No single number captures both; threshold choice affects both; varies by class prevalence.',
    codeExample: `from sklearn.metrics import precision_score, recall_score, classification_report
print(precision_score(y_true, y_pred))
print(recall_score(y_true, y_pred))
print(classification_report(y_true, y_pred))`,
    tags: ['classification', 'metric', 'imbalanced', 'tradeoff'],
  },
  {
    id: 'f1',
    term: 'F1 Score',
    category: 'evaluation',
    shortDef: 'Harmonic mean of precision and recall: 2·P·R / (P+R).',
    fullDef: 'F1 balances precision and recall into a single number, preferring cases where both are high (harmonic mean is dominated by the smaller value). F_β score generalizes: β > 1 weights recall more, β < 1 weights precision more. Macro-average averages per-class F1; micro-average computes globally; weighted-average accounts for class size.',
    whenToUse: 'Imbalanced classification; when you want a single metric balancing precision and recall.',
    tradeoffs: 'Still a single threshold; doesn\'t account for true negatives; macro vs micro vs weighted choice matters.',
    codeExample: `from sklearn.metrics import f1_score
f1 = f1_score(y_true, y_pred, average='macro')  # or 'micro', 'weighted'`,
    tags: ['classification', 'metric', 'harmonic-mean', 'imbalanced'],
  },
  {
    id: 'roc-auc',
    term: 'ROC / AUC',
    category: 'evaluation',
    shortDef: 'ROC plots TPR vs FPR across thresholds; AUC summarizes it as a single probability of correct ranking.',
    fullDef: 'The ROC (Receiver Operating Characteristic) curve plots True Positive Rate (recall) vs False Positive Rate (1 - specificity) as the decision threshold varies. AUC (Area Under Curve) = probability that the model ranks a random positive higher than a random negative. AUC = 0.5 → random; 1.0 → perfect. Threshold-independent metric.',
    whenToUse: 'Binary classification with probability outputs; comparing models independent of threshold; imbalanced data.',
    tradeoffs: 'Optimistic on highly imbalanced data (Precision-Recall AUC better); doesn\'t reflect calibration; multi-class AUC is complex.',
    codeExample: `from sklearn.metrics import roc_auc_score, roc_curve
auc = roc_auc_score(y_true, y_scores)
fpr, tpr, thresholds = roc_curve(y_true, y_scores)`,
    tags: ['classification', 'metric', 'threshold-independent', 'ranking'],
  },
  {
    id: 'rmse',
    term: 'RMSE & R²',
    category: 'evaluation',
    shortDef: 'RMSE: root of mean squared error; R²: proportion of variance explained by the model.',
    fullDef: 'RMSE = √(Σ(yᵢ - ŷᵢ)²/n) — same units as target, penalizes large errors. MAE = Σ|yᵢ - ŷᵢ|/n — more robust to outliers. R² = 1 - SS_res/SS_tot — fraction of variance explained; can be negative for very poor models. Adjusted R² penalizes extra features. RMSE is scale-dependent; use relative metrics (MAPE) to compare across targets.',
    whenToUse: 'Regression problems; RMSE when large errors are especially bad; R² for relative model quality.',
    tradeoffs: 'RMSE sensitive to outliers; R² increases with more features even if useless (use adjusted R²); scale-dependent.',
    codeExample: `from sklearn.metrics import mean_squared_error, r2_score
import numpy as np
rmse = np.sqrt(mean_squared_error(y_true, y_pred))
r2 = r2_score(y_true, y_pred)`,
    tags: ['regression', 'metric', 'error', 'variance-explained'],
  },
  {
    id: 'confusion-matrix',
    term: 'Confusion Matrix',
    category: 'evaluation',
    shortDef: 'Table showing counts of TP, TN, FP, FN — the foundation of all classification metrics.',
    fullDef: 'A confusion matrix rows = actual class, columns = predicted class. For binary: TP (correctly predicted positive), TN (correctly predicted negative), FP (predicted positive, actually negative — Type I error), FN (predicted negative, actually positive — Type II error). All classification metrics (accuracy, precision, recall, F1, specificity) derive from these four counts. For multiclass, extend to n×n.',
    whenToUse: 'Always — it\'s the fundamental diagnostic for classification; identifying which classes are confused.',
    tradeoffs: 'Harder to read for many classes; doesn\'t show probability calibration.',
    codeExample: `from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
cm = confusion_matrix(y_true, y_pred)
ConfusionMatrixDisplay(cm).plot()`,
    tags: ['classification', 'metric', 'diagnostic', 'TP-FP-TN-FN'],
  },
  {
    id: 'cross-validation',
    term: 'Cross-Validation',
    category: 'evaluation',
    shortDef: 'Repeatedly split data into train/validation folds to get a robust estimate of generalization error.',
    fullDef: 'k-Fold CV divides data into k equal folds; trains on k-1, validates on the remaining fold, and rotates. Reports mean ± std of the metric. Stratified k-fold preserves class proportions per fold. Leave-One-Out (LOOCV) uses n folds. Time series requires temporal ordering (TimeSeriesSplit). Nested CV separates hyperparameter tuning from evaluation.',
    whenToUse: 'Any model evaluation with limited data; hyperparameter selection; comparing models reliably.',
    tradeoffs: 'k× training cost; data leakage if preprocessing happens outside CV; not suitable for time series without care.',
    codeExample: `from sklearn.model_selection import cross_val_score, StratifiedKFold
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=cv, scoring='f1_macro')
print(f'{scores.mean():.3f} ± {scores.std():.3f}')`,
    tags: ['evaluation', 'generalization', 'overfitting', 'fold'],
  },
  {
    id: 'log-loss',
    term: 'Log Loss',
    category: 'evaluation',
    shortDef: 'Penalizes confident wrong predictions: −Σ [y log(p) + (1−y) log(1−p)].',
    fullDef: 'Log loss (binary cross-entropy) measures the quality of predicted probabilities, not just class predictions. Penalizes confident wrong predictions heavily (predicting 0.99 for the wrong class is much worse than predicting 0.6). Lower is better; perfect model = 0. Used as the training objective for logistic regression and neural networks. Requires calibrated probability outputs.',
    whenToUse: 'When you care about probability quality (not just classification); Kaggle competitions; training objective for neural networks.',
    tradeoffs: 'Sensitive to miscalibrated probabilities; requires probability outputs; hard to interpret in absolute terms.',
    codeExample: `from sklearn.metrics import log_loss
ll = log_loss(y_true, y_prob)  # y_prob: predicted probabilities`,
    tags: ['classification', 'metric', 'probability', 'cross-entropy'],
  },

  // ── DEEP LEARNING ─────────────────────────────────────────────────────────
  {
    id: 'perceptron',
    term: 'Perceptron & Neural Network',
    category: 'deep',
    shortDef: 'Layers of interconnected nodes applying weighted sums + non-linear activations to learn representations.',
    fullDef: 'A perceptron computes ŷ = f(wᵀx + b) where f is an activation function. Stacking perceptrons in layers creates a feedforward neural network (MLP). With enough layers and units, MLPs are universal approximators. Training: forward pass computes loss; backward pass computes gradients via backpropagation; optimizer updates weights. Batch normalization and dropout stabilize training.',
    whenToUse: 'Complex non-linear patterns; large datasets; raw input (pixels, text tokens) with learned features.',
    tradeoffs: 'Requires large data; computationally expensive; many hyperparameters; black-box; needs normalization.',
    codeExample: `import torch.nn as nn
model = nn.Sequential(
    nn.Linear(128, 256), nn.ReLU(), nn.Dropout(0.3),
    nn.Linear(256, 128), nn.ReLU(),
    nn.Linear(128, 10)
)`,
    tags: ['neural-network', 'MLP', 'deep-learning', 'universal-approximator'],
  },
  {
    id: 'activation-functions',
    term: 'Activation Functions',
    category: 'deep',
    shortDef: 'Non-linear functions applied after each layer that enable networks to learn complex mappings.',
    fullDef: 'Without activation functions, stacked linear layers collapse to a single linear transformation. ReLU(x) = max(0, x): fast, avoids vanishing gradients, most common. Sigmoid: squashes to (0,1), used for output probability in binary tasks; vanishing gradients in deep nets. Tanh: (−1, 1), zero-centered. Leaky ReLU, GELU, Swish address dying ReLU. Softmax normalizes outputs to a probability distribution (multi-class output).',
    whenToUse: 'Choose ReLU/GELU for hidden layers; Sigmoid for binary output; Softmax for multi-class output.',
    tradeoffs: 'Sigmoid/tanh cause vanishing gradients in deep nets; ReLU can cause dead neurons; activation choice affects convergence.',
    codeExample: `import torch.nn.functional as F
x = F.relu(linear(x))      # hidden layer
x = F.gelu(linear(x))      # transformer-style
out = F.softmax(linear(x), dim=1)  # multi-class output`,
    tags: ['neural-network', 'ReLU', 'sigmoid', 'non-linearity'],
  },
  {
    id: 'backpropagation',
    term: 'Backpropagation',
    category: 'deep',
    shortDef: 'Efficient computation of gradients through a network using the chain rule, enabling gradient-based optimization.',
    fullDef: 'Backpropagation applies the chain rule of calculus to compute ∂Loss/∂wᵢ for every weight. Forward pass: compute layer outputs and cache activations. Backward pass: propagate gradient from loss backward through layers. Gradient descent then updates w ← w − η∇L. Variants: SGD (mini-batch), Adam (adaptive moments), AdaGrad, RMSProp. Automatic differentiation frameworks (PyTorch autograd, JAX) handle this automatically.',
    whenToUse: 'Training any neural network — it\'s the standard optimization algorithm.',
    tradeoffs: 'Vanishing/exploding gradients in deep networks; sensitive to learning rate; local minima (though less of an issue in deep nets than believed).',
    codeExample: `# PyTorch training loop
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
for x_batch, y_batch in dataloader:
    optimizer.zero_grad()
    loss = criterion(model(x_batch), y_batch)
    loss.backward()       # backprop
    optimizer.step()      # update weights`,
    tags: ['optimization', 'gradient', 'chain-rule', 'training'],
  },
  {
    id: 'cnn',
    term: 'Convolutional Neural Network (CNN)',
    category: 'deep',
    shortDef: 'Applies learned spatial filters to exploit local structure in grid-like data (images, sequences).',
    fullDef: 'CNNs use convolutional layers that apply small filters (kernels) across the spatial dimensions, sharing weights across positions. This gives translation invariance and drastically reduces parameters vs fully connected layers. Architecture: Conv → Activation → Pool → repeat → Flatten → Dense. Residual connections (ResNet) enable very deep networks.',
    whenToUse: 'Image classification, object detection, segmentation; any data with local spatial/temporal structure.',
    tradeoffs: 'Requires large amounts of image data (or use pretrained); sensitive to scale/rotation without augmentation; complex architectures.',
    codeExample: `import torch.nn as nn
cnn = nn.Sequential(
    nn.Conv2d(3, 32, kernel_size=3, padding=1), nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(32, 64, kernel_size=3, padding=1), nn.ReLU(),
    nn.AdaptiveAvgPool2d(1), nn.Flatten(),
    nn.Linear(64, 10)
)`,
    tags: ['image', 'convolutional', 'spatial', 'filters'],
  },
  {
    id: 'rnn-lstm',
    term: 'RNN & LSTM',
    category: 'deep',
    shortDef: 'Recurrent networks process sequences by maintaining a hidden state passed from step to step.',
    fullDef: 'RNNs process sequences token by token, updating hidden state hₜ = f(Whₜ₋₁ + Wxₜ + b). Vanilla RNNs suffer from vanishing gradients over long sequences. LSTM adds cell state and three gates (forget, input, output) to selectively remember/forget information. GRU is a simpler variant with two gates. Bidirectional RNNs process sequences in both directions.',
    whenToUse: 'Sequence modeling (time series, text); now largely replaced by Transformers for NLP but still used in specialized settings.',
    tradeoffs: 'Sequential computation → slow to parallelize; LSTMs still struggle with very long dependencies; superseded by Transformers for many tasks.',
    codeExample: `import torch.nn as nn
lstm = nn.LSTM(input_size=64, hidden_size=128, num_layers=2,
               batch_first=True, dropout=0.2, bidirectional=True)
output, (hn, cn) = lstm(x)  # x: (batch, seq_len, input_size)`,
    tags: ['sequence', 'recurrent', 'LSTM', 'time-series', 'NLP'],
  },
  {
    id: 'transformer',
    term: 'Transformer',
    category: 'deep',
    shortDef: 'Attention-based architecture processing all sequence positions in parallel, dominant in NLP and beyond.',
    fullDef: 'Transformers replace recurrence with self-attention: each token attends to all others via Q, K, V matrices (Attention(Q,K,V) = softmax(QKᵀ/√d)V). Multi-head attention runs multiple attention heads in parallel. Positional encodings inject order information. Encoder-decoder (T5), encoder-only (BERT), and decoder-only (GPT) variants exist. Scales remarkably well with data and compute.',
    whenToUse: 'NLP (translation, classification, generation); vision (ViT); multimodal; any large-scale sequence or structured data.',
    tradeoffs: 'O(n²) attention complexity; enormous compute/data requirements for training from scratch; use pretrained models.',
    codeExample: `from transformers import AutoModel, AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased')
inputs = tokenizer("Hello world", return_tensors="pt")
outputs = model(**inputs)  # last_hidden_state: (1, seq_len, 768)`,
    tags: ['attention', 'NLP', 'BERT', 'GPT', 'state-of-the-art'],
  },
];
