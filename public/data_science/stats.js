// stats.js — Statistics lesson data for Data Science Learning App
// Each lesson: id, title, description, concepts[], explanation, examples[], quizzes[]

const STATS_LESSONS = [
  {
    id: 1,
    title: "Descriptive Statistics",
    description: "Summarizing and understanding data distributions",
    icon: "📊",
    concepts: ["mean", "median", "mode", "variance", "standard deviation", "IQR", "skewness", "kurtosis"],
    explanation: `Descriptive statistics summarize the key properties of a dataset without generalizing to a larger population.

**Central Tendency** describes where the data is centered:
- **Mean** (μ): arithmetic average — sensitive to outliers
- **Median**: middle value when sorted — robust to outliers
- **Mode**: most frequent value — used for categorical data

**Spread** describes how dispersed the data is:
- **Variance** (σ²): average squared deviation from the mean
- **Standard Deviation** (σ): square root of variance — same units as data
- **IQR** (Interquartile Range): Q3 − Q1 — robust spread measure; used in boxplots

**Shape** describes the distribution's form:
- **Skewness**: asymmetry. Right-skewed (positive): long tail to right, mean > median. Left-skewed: mean < median.
- **Kurtosis**: "tailedness." High kurtosis → heavy tails / more outliers (leptokurtic). Normal distribution has kurtosis = 3 (excess kurtosis = 0).

**Percentiles & Quartiles**: The pth percentile is the value below which p% of data falls. Q1 = 25th, Q2 = 50th (median), Q3 = 75th percentile.`,
    examples: [
      { label: "Mean", formula: "μ = (Σxᵢ) / n", explanation: "Sum all values, divide by count. Pulled toward outliers." },
      {
        label: "Variance",
        formula: "σ² = Σ(xᵢ − μ)² / n",
        explanation: "Population variance. Sample variance divides by (n−1) for unbiased estimation (Bessel's correction).",
      },
      {
        label: "IQR",
        formula: "IQR = Q3 − Q1",
        explanation: "Range of the middle 50% of data. Outliers often defined as values > Q3 + 1.5·IQR or < Q1 − 1.5·IQR.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "A dataset has values: 1, 2, 3, 4, 100. Which measure of central tendency is most affected by the outlier (100)?",
        options: ["Mean", "Median", "Mode", "IQR"],
        answer: 0,
        explanation: "The mean is pulled strongly by extreme values. The median (3) is unaffected by the outlier.",
      },
      {
        type: "mc",
        question: "A right-skewed distribution has:",
        options: ["Mean > Median > Mode", "Mean < Median < Mode", "Mean = Median = Mode", "Median > Mean > Mode"],
        answer: 0,
        explanation:
          "In right-skewed data, the long tail pulls the mean rightward past the median. (This ordering holds for unimodal distributions; in practice, mode can be unstable or undefined.)",
      },
      {
        type: "mc",
        question: "Why does sample variance divide by (n−1) instead of n?",
        options: [
          "To make the estimator unbiased (Bessel's correction)",
          "To make the value larger",
          "Because the sample is always sorted",
          "To convert to standard deviation",
        ],
        answer: 0,
        explanation: "Dividing by n underestimates population variance. Using (n−1) corrects this bias.",
      },
      {
        type: "tf",
        question: "The standard deviation is always in the same units as the original data.",
        answer: true,
        explanation: "Variance is in squared units; taking the square root returns to original units.",
      },
    ],
  },

  {
    id: 2,
    title: "Probability Fundamentals",
    description: "Sample spaces, probability rules, and conditional probability",
    icon: "🎲",
    concepts: [
      "sample space",
      "event",
      "probability axioms",
      "complement",
      "union",
      "intersection",
      "conditional probability",
      "independence",
      "multiplication rule",
    ],
    explanation: `Probability formalizes uncertainty by assigning numbers between 0 and 1 to events.

**Sample Space (Ω)**: the set of all possible outcomes.
**Event (A)**: a subset of the sample space.
**Probability Axioms** (Kolmogorov):
1. P(A) ≥ 0 for all events A
2. P(Ω) = 1
3. For mutually exclusive events: P(A ∪ B) = P(A) + P(B)

**Key Rules**:
- **Complement**: P(Aᶜ) = 1 − P(A)
- **Addition Rule**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- **Conditional Probability**: P(A|B) = P(A ∩ B) / P(B) — probability of A given B has occurred
- **Multiplication Rule**: P(A ∩ B) = P(A|B) · P(B)

**Independence**: Events A and B are independent if P(A ∩ B) = P(A) · P(B), equivalently P(A|B) = P(A). Knowing B gives no information about A.

**Common Mistakes**:
- Confusing P(A|B) with P(B|A) — the base rate fallacy
- Assuming correlation implies dependence in the probability sense
- Ignoring the sample space when computing probabilities`,
    examples: [
      { label: "Addition Rule", formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", explanation: "Subtract the intersection to avoid double-counting." },
      {
        label: "Conditional Probability",
        formula: "P(A|B) = P(A ∩ B) / P(B)",
        explanation: "Restricts the sample space to B, then measures A within it.",
      },
      {
        label: "Independence Test",
        formula: "P(A ∩ B) = P(A) · P(B)",
        explanation: "If this holds, A and B are independent; knowing one doesn't change the other's probability.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "If P(A) = 0.4 and P(B) = 0.3 and A, B are mutually exclusive, what is P(A ∪ B)?",
        options: ["0.7", "0.12", "0.58", "1.0"],
        answer: 0,
        explanation: "Mutually exclusive means P(A ∩ B) = 0, so P(A ∪ B) = 0.4 + 0.3 = 0.7.",
      },
      {
        type: "mc",
        question: "P(Rain tomorrow) = 0.3. What is P(No rain tomorrow)?",
        options: ["0.7", "0.3", "0.5", "Cannot be determined"],
        answer: 0,
        explanation: "Complement rule: P(Aᶜ) = 1 − P(A) = 1 − 0.3 = 0.7.",
      },
      {
        type: "mc",
        question: "Events A and B are independent. P(A) = 0.5, P(B) = 0.4. What is P(A ∩ B)?",
        options: ["0.2", "0.9", "0.1", "0.45"],
        answer: 0,
        explanation: "For independent events: P(A ∩ B) = P(A) · P(B) = 0.5 × 0.4 = 0.2.",
      },
      {
        type: "tf",
        question: "Mutually exclusive events are always independent.",
        answer: false,
        explanation: "Mutually exclusive events (P(A ∩ B) = 0) are actually dependent — if A occurs, B cannot.",
      },
    ],
  },

  {
    id: 3,
    title: "Bayes' Theorem",
    description: "Prior, likelihood, posterior — and Bayesian vs frequentist thinking",
    icon: "🔄",
    concepts: [
      "prior",
      "likelihood",
      "posterior",
      "marginal probability",
      "Bayes theorem",
      "Bayesian inference",
      "frequentist inference",
      "base rate",
    ],
    explanation: `Bayes' Theorem lets you update beliefs when new evidence arrives.

**Formula**: P(H|E) = P(E|H) · P(H) / P(E)

- **P(H)**: Prior — your belief in hypothesis H before seeing evidence
- **P(E|H)**: Likelihood — how probable is evidence E if H is true
- **P(E)**: Marginal probability (normalizing constant) — P(E) = ΣᵢP(E|Hᵢ)P(Hᵢ)
- **P(H|E)**: Posterior — updated belief after observing E

**Classic Example — Medical Test**:
- Disease prevalence: 1% (prior P(D) = 0.01)
- Test sensitivity: P(+|D) = 0.99
- Specificity: P(−|no D) = 0.95 → false positive rate P(+|no D) = 0.05
- If you test positive: P(D|+) = (0.99 × 0.01) / [(0.99 × 0.01) + (0.05 × 0.99)] ≈ **16.7%**

This surprises many people — low base rate dominates!

**Bayesian vs Frequentist**:
- **Frequentist**: probability = long-run frequency; parameters are fixed (unknown) constants; uses p-values and confidence intervals
- **Bayesian**: probability = degree of belief; parameters have distributions; uses posterior distributions and credible intervals

**Bayesian Inference in ML**: Naive Bayes, Gaussian Processes, Bayesian optimization, Bayesian neural networks. Priors act as regularization.`,
    examples: [
      {
        label: "Bayes' Theorem",
        formula: "P(H|E) = P(E|H) · P(H) / P(E)",
        explanation: "Posterior ∝ Likelihood × Prior. The normalizing constant P(E) ensures probabilities sum to 1.",
      },
      {
        label: "Law of Total Probability",
        formula: "P(E) = P(E|H)P(H) + P(E|Hᶜ)P(Hᶜ)",
        explanation: "Marginalizes over all hypotheses to compute the overall probability of evidence.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "In Bayes' theorem, P(H|E) is called the:",
        options: ["Posterior", "Prior", "Likelihood", "Marginal"],
        answer: 0,
        explanation: "P(H|E) is the posterior — belief in H after observing evidence E.",
      },
      {
        type: "mc",
        question:
          "A disease affects 0.1% of the population. A test has 95% sensitivity and 95% specificity. You test positive. The probability you have the disease is approximately:",
        options: ["~1.9%", "~95%", "~50%", "~0.1%"],
        answer: 0,
        explanation: "P(D|+) = (0.95 × 0.001) / [(0.95 × 0.001) + (0.05 × 0.999)] ≈ 0.00095/0.05090 ≈ 1.9%. Base rate matters!",
      },
      {
        type: "mc",
        question: "In the Bayesian framework, what acts as a form of regularization in machine learning models?",
        options: ["The prior distribution", "The likelihood function", "The posterior", "The marginal probability"],
        answer: 0,
        explanation:
          "A prior encodes beliefs before data. Strong priors pull estimates toward the prior (like regularization pulling weights toward zero).",
      },
      {
        type: "tf",
        question:
          "In frequentist probability, a probability of 0.05 means the event would occur about 5% of the time in the long run under identical repeated conditions.",
        answer: true,
        explanation:
          "Frequentist probability is defined as the long-run limiting relative frequency in repeated experiments — not necessarily the observed frequency in a finite sample, which can deviate.",
      },
    ],
  },

  {
    id: 4,
    title: "Common Distributions",
    description: "Normal, binomial, Poisson, t, chi-square, and F distributions",
    icon: "📈",
    concepts: [
      "normal distribution",
      "binomial distribution",
      "Poisson distribution",
      "t-distribution",
      "chi-square distribution",
      "F-distribution",
      "parameters",
      "PDF",
      "CDF",
    ],
    explanation: `Probability distributions model the random behavior of data-generating processes.

**Normal (Gaussian) N(μ, σ²)**: Bell-shaped, symmetric. Described by mean μ and variance σ². Z-score: z = (x − μ)/σ normalizes to N(0,1). Central to statistics (CLT makes many things normally distributed). 68-95-99.7 rule: 68% of data within ±1σ, 95% within ±2σ, 99.7% within ±3σ.

**Binomial B(n, p)**: Number of successes in n independent trials, each with success probability p. Mean = np, Variance = np(1−p). Approaches normal for large n.

**Poisson(λ)**: Number of events in a fixed interval when events occur at constant rate λ. Mean = Variance = λ. Used for rare events (calls per hour, defects per unit).

**t-Distribution**: Like normal but heavier tails; parameterized by degrees of freedom ν. Used when estimating the mean of a normal population with unknown variance and small sample. Converges to normal as ν → ∞.

**Chi-Square χ²(k)**: Sum of k squared standard normals. Used in goodness-of-fit and independence tests. Mean = k, Variance = 2k.

**F-Distribution**: Ratio of two chi-square variables divided by their degrees of freedom. Used in ANOVA and comparing model variances.`,
    examples: [
      {
        label: "Normal PDF",
        formula: "f(x) = (1/σ√2π) · exp(−(x−μ)²/2σ²)",
        explanation: "Symmetric bell curve. Fully described by μ (center) and σ (spread).",
      },
      { label: "Binomial PMF", formula: "P(X=k) = C(n,k) · pᵏ · (1−p)^(n−k)", explanation: "Probability of exactly k successes in n trials." },
      { label: "Poisson PMF", formula: "P(X=k) = λᵏ · e^(−λ) / k!", explanation: "Probability of k events when the average rate is λ." },
    ],
    quizzes: [
      {
        type: "mc",
        question: "For a Normal distribution N(50, 100), what percentage of data falls between 40 and 60?",
        options: ["~68%", "~95%", "~99.7%", "~50%"],
        answer: 0,
        explanation: "σ = √100 = 10. The range 40–60 is μ ± 1σ, which contains ~68% of a normal distribution.",
      },
      {
        type: "mc",
        question: "You flip a fair coin 100 times. The number of heads follows a:",
        options: ["Binomial distribution", "Normal distribution", "Poisson distribution", "t-distribution"],
        answer: 0,
        explanation:
          "n=100 independent trials, p=0.5 constant probability → Binomial(100, 0.5). (Approximately normal by CLT, but exactly binomial.)",
      },
      {
        type: "mc",
        question: "Why use a t-distribution instead of a normal distribution for hypothesis testing?",
        options: [
          "When population variance is unknown and sample is small",
          "When data is not continuous",
          "When testing two categorical variables",
          "When variance is known exactly",
        ],
        answer: 0,
        explanation: "The t-distribution accounts for extra uncertainty from estimating σ from the sample. For large n, it approximates normal.",
      },
      {
        type: "tf",
        question: "For a Poisson distribution, the mean equals the variance.",
        answer: true,
        explanation: "Poisson(λ) has mean = λ and variance = λ. This equal mean-variance property is a diagnostic for Poisson data.",
      },
    ],
  },

  {
    id: 5,
    title: "Central Limit Theorem",
    description: "Sampling distributions, standard error, and why normality appears everywhere",
    icon: "⚖️",
    concepts: ["CLT", "sampling distribution", "sample mean", "standard error", "law of large numbers", "convergence in distribution"],
    explanation: `The Central Limit Theorem (CLT) is arguably the most important theorem in applied statistics.

**Statement**: Given a population with mean μ and finite variance σ², the distribution of the sample mean X̄ (from samples of size n) approaches N(μ, σ²/n) as n → ∞, regardless of the population's original distribution.

**Implications**:
- We can apply normal-distribution tools even when the underlying data isn't normal
- Works remarkably well for n ≥ 30 in practice (even less for symmetric distributions)
- Explains why so many real-world averages/sums appear normally distributed

**Standard Error (SE)**: SE = σ/√n — the standard deviation of the sampling distribution of the mean. As n increases, SE decreases; larger samples give more precise estimates.

**Law of Large Numbers (LLN)**: The sample mean converges to the true population mean as n → ∞. The CLT tells you *how fast* and *in what distribution*.

**Key Uses**:
- Justifies using z-tests and t-tests on sample means
- Foundation for confidence intervals
- Underpins many machine learning approximations (e.g., mini-batch gradient estimates)

**Limitations**:
- Requires finite variance (fails for heavy-tailed distributions like Cauchy)
- Convergence is slower for highly skewed distributions
- The theorem is about the mean; individual observations are not necessarily normal`,
    examples: [
      {
        label: "CLT",
        formula: "X̄ ~ N(μ, σ²/n) as n → ∞",
        explanation: "The sample mean is approximately normally distributed with mean μ and variance σ²/n.",
      },
      {
        label: "Standard Error",
        formula: "SE(X̄) = σ / √n",
        explanation: "Standard deviation of the sampling distribution. Halving SE requires quadrupling sample size.",
      },
      { label: "Z-score for mean", formula: "Z = (X̄ − μ) / (σ/√n)", explanation: "Standardizes the sample mean. Under H₀, Z ~ N(0,1)." },
    ],
    quizzes: [
      {
        type: "mc",
        question: "You sample 100 values from a highly skewed distribution with σ = 20. The standard error of the sample mean is:",
        options: ["2.0", "20.0", "0.2", "200.0"],
        answer: 0,
        explanation: "SE = σ/√n = 20/√100 = 20/10 = 2.0.",
      },
      {
        type: "mc",
        question: "The Central Limit Theorem states that as sample size increases:",
        options: [
          "The distribution of the sample mean becomes approximately normal",
          "Individual data points become normally distributed",
          "The population variance decreases",
          "The sample mean equals the population mean",
        ],
        answer: 0,
        explanation: "CLT applies to the sampling distribution of the mean, not to individual observations.",
      },
      {
        type: "mc",
        question: "To cut the standard error of the mean in half, you must:",
        options: ["Quadruple the sample size", "Double the sample size", "Halve the sample size", "Double the variance"],
        answer: 0,
        explanation: "SE = σ/√n. To halve SE: σ/√(4n) = σ/(2√n) = SE/2. Need 4× the sample size.",
      },
      {
        type: "tf",
        question: "The CLT works for all distributions, including those with infinite variance.",
        answer: false,
        explanation: "The CLT requires finite variance. Heavy-tailed distributions like Cauchy (undefined variance) do not satisfy CLT.",
      },
    ],
  },

  {
    id: 6,
    title: "Hypothesis Testing",
    description: "H₀/Hₐ, p-values, significance, Type I/II errors, and statistical power",
    icon: "🔬",
    concepts: [
      "null hypothesis",
      "alternative hypothesis",
      "test statistic",
      "p-value",
      "significance level",
      "Type I error",
      "Type II error",
      "statistical power",
      "one-tailed vs two-tailed",
    ],
    explanation: `Hypothesis testing is a formal framework for making decisions under uncertainty using data.

**Setup**:
- **H₀ (Null Hypothesis)**: The default assumption (e.g., "no effect," "means are equal")
- **Hₐ (Alternative Hypothesis)**: What we're trying to establish (e.g., "treatment works")
- **Significance Level α**: Threshold for rejecting H₀ (commonly 0.05 or 0.01)

**Procedure**:
1. State H₀ and Hₐ
2. Collect data and compute a test statistic (z, t, chi-square, F)
3. Compute the p-value
4. Reject H₀ if p < α

**P-value**: The probability of observing data at least as extreme as the sample data, **assuming H₀ is true**. It is NOT the probability that H₀ is true.

**Error Types**:
- **Type I Error (α)**: Reject H₀ when it's true (false positive). Rate = α.
- **Type II Error (β)**: Fail to reject H₀ when it's false (false negative).
- **Power (1 − β)**: Probability of correctly rejecting a false H₀.

**Common Mistake**: A p-value < 0.05 does not mean the effect is large or practically important — statistical significance ≠ practical significance. Always report effect sizes.

**Common Tests**: t-test (means), chi-square (categories), ANOVA (multiple means), Mann-Whitney U (non-parametric).`,
    examples: [
      {
        label: "One-sample t-statistic",
        formula: "t = (X̄ − μ₀) / (s/√n)",
        explanation: "Tests if sample mean differs from hypothesized μ₀. Degrees of freedom = n − 1.",
      },
      {
        label: "Two-sample t-statistic",
        formula: "t = (X̄₁ − X̄₂) / SE(X̄₁ − X̄₂)",
        explanation: "Tests if two group means differ. Welch's t-test doesn't assume equal variances.",
      },
      {
        label: "Power",
        formula: "Power = 1 − β = P(reject H₀ | H₀ false)",
        explanation: "Determined by effect size, sample size, α, and data variance. Power ≥ 0.8 is typical target.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "A p-value of 0.03 with α = 0.05 means:",
        options: [
          "Reject H₀; result is statistically significant",
          "Accept H₀; the result is not significant",
          "There is a 3% chance H₀ is true",
          "The effect size is 3%",
        ],
        answer: 0,
        explanation: "p = 0.03 < α = 0.05 → reject H₀. p-value is NOT the probability H₀ is true.",
      },
      {
        type: "mc",
        question: "Which error occurs when you reject the null hypothesis but it is actually true?",
        options: ["Type I Error (α)", "Type II Error (β)", "Power error", "Sampling error"],
        answer: 0,
        explanation: "Type I error (false positive): rejecting H₀ when it's true. Its rate equals the significance level α.",
      },
      {
        type: "mc",
        question: "Increasing sample size while keeping α constant will:",
        options: ["Increase statistical power", "Increase Type I error rate", "Decrease p-values always", "Have no effect on power"],
        answer: 0,
        explanation: "Larger n → smaller SE → easier to detect real effects → higher power (1 − β).",
      },
      {
        type: "tf",
        question: "A result can be statistically significant but not practically important.",
        answer: true,
        explanation: "With large enough n, even tiny effects become statistically significant. Always also report effect sizes (Cohen's d, etc.).",
      },
    ],
  },

  {
    id: 7,
    title: "Confidence Intervals",
    description: "Construction, margin of error, and correct interpretation",
    icon: "📏",
    concepts: ["confidence interval", "confidence level", "margin of error", "critical value", "standard error", "interpretation", "bootstrap CI"],
    explanation: `A confidence interval gives a range of plausible values for a population parameter.

**Formula (for mean, large n)**:
CI = X̄ ± z* · (σ/√n)

where z* is the critical value from the normal distribution (1.96 for 95% CI, 2.576 for 99% CI). For small n with unknown σ, use t* instead.

**Correct Interpretation**: If we repeat this procedure many times, 95% of the resulting intervals will contain the true population mean. **It is NOT correct to say "95% probability that the true mean is in this specific interval."** (Frequentist CIs: the true mean is fixed, not random.)

**Margin of Error (ME)**: Half the CI width. ME = z* · SE. ME decreases as n increases (∝ 1/√n) or as confidence level decreases.

**Bootstrap Confidence Intervals**: Resample from the data with replacement, compute the statistic on each resample, and use the percentile distribution of those statistics. Non-parametric and works for any statistic.

**Common Mistakes**:
- Thinking wider CI means less accurate measurement (actually just higher confidence)
- Misinterpreting CIs as probability statements about the parameter
- Not reporting CI width (just point estimates)

**Relationship to Hypothesis Testing**: A 95% CI is equivalent to a two-tailed test at α = 0.05. If the CI doesn't include the null value, you'd reject H₀.`,
    examples: [
      {
        label: "95% CI for mean (known σ)",
        formula: "X̄ ± 1.96 · σ/√n",
        explanation: "1.96 is the z* for 95% confidence (middle 95% of normal distribution).",
      },
      { label: "95% CI for proportion", formula: "p̂ ± 1.96 · √(p̂(1−p̂)/n)", explanation: "Uses the sample proportion p̂ to estimate standard error." },
      {
        label: "CI width",
        formula: "Width = 2 · z* · σ/√n",
        explanation: "To halve the width, quadruple n. Higher confidence level → wider interval.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "A 95% confidence interval for a mean is (42, 58). The correct interpretation is:",
        options: [
          "95% of such intervals from repeated sampling will contain the true mean",
          "There is a 95% probability that the true mean is between 42 and 58",
          "The sample mean is 95% accurate",
          "95% of data values fall between 42 and 58",
        ],
        answer: 0,
        explanation:
          "In the frequentist view, the true mean is fixed. The CI is a random interval that captures it 95% of the time in repeated sampling.",
      },
      {
        type: "mc",
        question: "You want to halve the margin of error in a study. You should:",
        options: ["Quadruple the sample size", "Double the sample size", "Halve the confidence level", "Double the confidence level"],
        answer: 0,
        explanation: "ME ∝ 1/√n. To halve ME: need √(n_new) = 2√n → n_new = 4n.",
      },
      {
        type: "mc",
        question: "Which confidence level gives the widest interval for the same data?",
        options: ["99%", "95%", "90%", "80%"],
        answer: 0,
        explanation: "Higher confidence requires a wider interval (larger z*) to be more likely to contain the true parameter.",
      },
      {
        type: "tf",
        question: "A bootstrap confidence interval can be computed without assuming the data is normally distributed.",
        answer: true,
        explanation: "Bootstrap CIs are non-parametric — they estimate the sampling distribution by resampling the data itself.",
      },
    ],
  },

  {
    id: 8,
    title: "Correlation",
    description: "Pearson, Spearman, spurious correlation, and Simpson's paradox",
    icon: "🔗",
    concepts: [
      "Pearson correlation",
      "Spearman correlation",
      "covariance",
      "correlation vs causation",
      "spurious correlation",
      "Simpson's paradox",
      "partial correlation",
    ],
    explanation: `Correlation measures the strength and direction of association between two variables.

**Pearson Correlation Coefficient (r)**: measures linear association.
r = Cov(X,Y) / (σₓ · σᵧ) = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / [(n−1)sₓsᵧ]

Range: [−1, 1]. r = 1: perfect positive linear; r = −1: perfect negative linear; r = 0: no linear relationship. Normality is mainly an assumption for inference about r (p-values and confidence intervals); Pearson measures linear association regardless. Sensitive to outliers and nonlinearity.

**Spearman Rank Correlation (ρ)**: Pearson correlation applied to the ranks of values. Non-parametric — robust to outliers and monotone non-linear relationships. Use when data is ordinal or not normally distributed.

**Correlation ≠ Causation**: Two variables can correlate due to:
- A common cause (confounder)
- Reverse causation
- Chance (especially with many comparisons)
- Spurious correlation (e.g., ice cream sales and drowning rates both rise in summer)

**Simpson's Paradox**: A trend that appears in multiple subgroups reverses or disappears when groups are combined. Example: a treatment appears harmful overall but beneficial within each gender group. Always check for lurking confounders by analyzing subgroups.

**Partial Correlation**: Correlation between X and Y controlling for variable Z. Removes Z's influence on both X and Y before computing correlation.`,
    examples: [
      { label: "Pearson r", formula: "r = Cov(X,Y) / (σₓ · σᵧ)", explanation: "Bounded in [−1, 1]. Only captures linear relationships." },
      {
        label: "Covariance",
        formula: "Cov(X,Y) = Σ(xᵢ − x̄)(yᵢ − ȳ) / (n−1)",
        explanation: "Positive = variables move together; negative = opposite directions; 0 = uncorrelated. Scale-dependent.",
      },
      {
        label: "Spearman ρ",
        formula: "ρ = 1 − 6Σdᵢ² / n(n²−1)",
        explanation: "dᵢ = rank difference between paired observations. Works for monotone non-linear relationships.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "Pearson correlation r = 0.9 between variables A and B means:",
        options: [
          "Strong positive linear relationship",
          "A causes B",
          "A and B share 90% of their values",
          "A change in A causes a 0.9 unit change in B",
        ],
        answer: 0,
        explanation: "r = 0.9 indicates a strong positive linear association. It says nothing about causation.",
      },
      {
        type: "mc",
        question: "When should you use Spearman correlation instead of Pearson?",
        options: [
          "When data is ordinal or has outliers that could distort linear correlation",
          "When sample size is large",
          "When both variables are normally distributed",
          "When you want a stronger correlation coefficient",
        ],
        answer: 0,
        explanation: "Spearman is non-parametric and based on ranks, making it robust to outliers and non-normality.",
      },
      {
        type: "mc",
        question: "Simpson's paradox occurs when:",
        options: [
          "A trend reverses when data is aggregated across subgroups",
          "Two correlated variables are actually independent",
          "A large p-value is obtained despite a real effect",
          "A small sample produces a large correlation",
        ],
        answer: 0,
        explanation: "Simpson's paradox: direction of association changes when subgroups are combined due to a lurking confounding variable.",
      },
      {
        type: "tf",
        question: "Two variables can have Pearson r = 0 and still have a strong non-linear relationship.",
        answer: true,
        explanation: "r only measures linear association. A quadratic relationship (X² vs X) gives r ≈ 0 even though X perfectly predicts X².",
      },
    ],
  },

  {
    id: 9,
    title: "Regression (Statistical View)",
    description: "OLS, assumptions, diagnostics, and R² interpretation",
    icon: "📉",
    concepts: [
      "OLS",
      "regression coefficients",
      "residuals",
      "R²",
      "adjusted R²",
      "regression assumptions",
      "heteroscedasticity",
      "multicollinearity",
      "VIF",
    ],
    explanation: `Regression models the relationship between a dependent variable Y and one or more predictors X.

**Ordinary Least Squares (OLS)**: Fits β₀ + β₁x₁ + … + βₚxₚ to minimize Σ(yᵢ − ŷᵢ)² (sum of squared residuals). β̂ = (XᵀX)⁻¹Xᵀy is the closed-form solution.

**Coefficient Interpretation**: β₁ = expected change in Y for a 1-unit increase in X₁, **holding all other variables constant**. This "ceteris paribus" condition is critical for causal interpretation.

**R² (Coefficient of Determination)**: Proportion of variance in Y explained by the model. R² = 1 − SS_res/SS_tot. Range [0, 1] for in-sample OLS; higher = better fit. Note: out-of-sample, R² can be negative if predictions are worse than simply predicting the mean. **Adjusted R²** penalizes adding useless predictors.

**Gauss-Markov Assumptions** (for OLS to be BLUE — Best Linear Unbiased Estimator):
1. Linear in parameters
2. No perfect multicollinearity
3. Zero conditional mean of errors: E[ε|X] = 0
4. Homoscedasticity: Var(ε|X) = σ² (constant)
5. No autocorrelation: Cov(εᵢ, εⱼ) = 0

**Diagnostics**:
- **Residual plots** (vs fitted values): non-random patterns signal non-linearity or heteroscedasticity
- **Q-Q plot**: checks normality of residuals
- **VIF** (Variance Inflation Factor): detects multicollinearity; VIF > 10 is problematic
- **Cook's distance**: identifies influential observations`,
    examples: [
      {
        label: "OLS Estimator",
        formula: "β̂ = (XᵀX)⁻¹Xᵀy",
        explanation: "Matrix form. Minimizes sum of squared residuals. Requires XᵀX to be invertible (no perfect multicollinearity).",
      },
      {
        label: "R²",
        formula: "R² = 1 − SS_res/SS_tot = 1 − Σ(yᵢ−ŷᵢ)²/Σ(yᵢ−ȳ)²",
        explanation: "Proportion of variance explained. Adding any predictor increases R² even if it's useless.",
      },
      {
        label: "Adjusted R²",
        formula: "R²_adj = 1 − (1−R²)(n−1)/(n−p−1)",
        explanation: "Penalizes extra predictors p. Decreases if useless predictors are added.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "OLS minimizes:",
        options: ["Sum of squared residuals", "Sum of absolute residuals", "Maximum residual", "Mean of residuals"],
        answer: 0,
        explanation: "OLS = Ordinary Least Squares. Minimizes Σ(yᵢ − ŷᵢ)². MAE minimizes absolute residuals (more robust to outliers).",
      },
      {
        type: "mc",
        question: "You add 10 random noise variables to a regression and R² increases from 0.70 to 0.73. This is:",
        options: [
          "Expected — R² always increases with more variables",
          "Suspicious — noise should not improve fit",
          "Impossible",
          "Good model improvement",
        ],
        answer: 0,
        explanation: "R² increases whenever any variable is added, even useless ones. Use Adjusted R² to penalize unnecessary complexity.",
      },
      {
        type: "mc",
        question: "A plot of residuals vs fitted values shows a fan-shaped pattern. This indicates:",
        options: ["Heteroscedasticity", "Multicollinearity", "Normality of residuals", "No issues"],
        answer: 0,
        explanation:
          "Fan shape (residuals spread increasing with fitted values) = non-constant variance = heteroscedasticity. Violates OLS assumption 4.",
      },
      {
        type: "tf",
        question: "A high VIF (Variance Inflation Factor) for a predictor indicates it is correlated with other predictors.",
        answer: true,
        explanation:
          "VIF measures how much a predictor's variance is inflated by collinearity with others. VIF > 10 suggests problematic multicollinearity.",
      },
    ],
  },

  {
    id: 10,
    title: "A/B Testing & Experimental Design",
    description: "Randomization, sample size, MDE, and multiple testing corrections",
    icon: "🧪",
    concepts: [
      "A/B test",
      "randomization",
      "control group",
      "treatment group",
      "MDE",
      "sample size calculation",
      "multiple testing",
      "Bonferroni correction",
      "novelty effect",
      "CUPED",
    ],
    explanation: `A/B testing is the gold standard for establishing causal effects in business and product contexts.

**Setup**: Randomly assign users to Control (A) or Treatment (B). Measure a primary metric (e.g., conversion rate). Use a statistical test to determine if the difference is significant.

**Why Randomization Matters**: Randomization ensures that confounders (device type, time of day, user demographics) are balanced between groups on average, enabling causal inference.

**Minimum Detectable Effect (MDE)**: The smallest effect size the experiment is powered to detect at given α and power (1−β). Smaller MDE requires larger n. Decide MDE based on business value before running the test.

**Sample Size Formula** (for proportions): n ≈ (z_α/2 + z_β)² · 2p̄(1−p̄) / (MDE)²

**Multiple Testing Problem**: If you test 20 metrics, you expect ~1 false positive at α = 0.05 even with no real effects. Corrections:
- **Bonferroni**: α_adjusted = α / m (conservative)
- **Benjamini-Hochberg (FDR)**: controls false discovery rate (less conservative)

**Common Pitfalls**:
- **Peeking**: stopping early when p < 0.05 inflates Type I error (use sequential testing instead)
- **SUTVA violation**: treatment spills over to control (e.g., social features)
- **Novelty effect**: users respond to change itself, not the actual treatment
- **Imbalanced assignment**: bugs in randomization
- **Not defining the metric in advance**: p-hacking

**CUPED** (Controlled-experiment Using Pre-Experiment Data): reduces variance by controlling for pre-experiment metric, increasing power without more users.`,
    examples: [
      {
        label: "MDE",
        formula: "MDE = (z_α/2 + z_β) · √(2 · p̄(1−p̄)/n)",
        explanation: "Smallest detectable difference. Smaller MDE → larger required n. Plan this before running the experiment.",
      },
      {
        label: "Bonferroni Correction",
        formula: "α_corrected = α / m",
        explanation: "m = number of tests. Very conservative for large m. Reduces power substantially.",
      },
      {
        label: "Relative Uplift",
        formula: "Uplift = (p_B − p_A) / p_A",
        explanation: "Often more interpretable than absolute difference for business metrics.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "Why is randomization essential in A/B testing?",
        options: [
          "It balances confounders between groups, enabling causal inference",
          "It increases the sample size",
          "It makes the test statistic larger",
          "It reduces the required runtime",
        ],
        answer: 0,
        explanation: "Without randomization, group differences could be explained by pre-existing differences (confounders), not the treatment.",
      },
      {
        type: "mc",
        question: "You test 50 metrics in an A/B test with α = 0.05. About how many false positives do you expect if no metrics are truly different?",
        options: ["~2–3", "~0", "~25", "~50"],
        answer: 0,
        explanation: "50 tests × 0.05 = 2.5 expected false positives. Multiple testing correction (Bonferroni or FDR) is needed.",
      },
      {
        type: "mc",
        question: 'The "peeking problem" in A/B testing refers to:',
        options: [
          "Stopping the test early when p < 0.05, inflating Type I error",
          "Looking at the data before it's collected",
          "Using too small a sample size",
          "Not randomizing properly",
        ],
        answer: 0,
        explanation: "Repeatedly checking significance and stopping when p < 0.05 increases false positive rate well above α.",
      },
      {
        type: "tf",
        question: "A larger Minimum Detectable Effect (MDE) requires a larger sample size.",
        answer: false,
        explanation: "Larger effects are easier to detect, so a larger MDE requires FEWER participants. Smaller MDE → larger n needed.",
      },
    ],
  },

  {
    id: 11,
    title: "Bootstrapping",
    description: "Resampling with replacement to estimate sampling distributions and confidence intervals",
    icon: "🥾",
    concepts: ["bootstrap sample", "resampling", "percentile CI", "BCa interval", "sampling distribution", "standard error", "non-parametric"],
    explanation: `Bootstrapping estimates the sampling distribution of a statistic by resampling the observed data with replacement.

**Core Idea**: Draw B bootstrap samples (typically B = 1,000–10,000), each of size n (same as the original data), with replacement. Compute the statistic of interest on each sample. The distribution of these B estimates approximates the sampling distribution.

**When to Use Bootstrapping**:
- The statistic has no simple closed-form standard error (e.g., correlation, median, custom metrics)
- Distributional assumptions (normality) are questionable
- Small-to-moderate sample sizes with approximately regular distributions

**Confidence Intervals**:
- **Percentile CI**: Take the 2.5th and 97.5th percentiles of the bootstrap distribution as a 95% CI. Simple but can be biased.
- **BCa (Bias-Corrected and Accelerated)**: Adjusts for bias and skewness of the bootstrap distribution. More accurate, especially for skewed estimators.
- **t-interval bootstrap**: Studentizes the bootstrap distribution for better coverage.

**When Bootstrapping Fails**:
- **Small n** (< ~20): Bootstrap distribution poorly approximates the true sampling distribution
- **Heavy-tailed distributions**: Extreme values dominate; coverage can be poor
- **Discrete statistics** (e.g., max of a sample): Bootstrap has too few unique values
- **Dependent data** (time series): Need block bootstrap to preserve autocorrelation`,
    examples: [
      {
        label: "Bootstrap SE",
        formula: "$\\widehat{\\text{SE}} = \\sqrt{\\frac{1}{B-1}\\sum_{b=1}^{B}(\\hat{\\theta}^{*b} - \\bar{\\theta}^*)^2}$",
        explanation: "Standard deviation of B bootstrap estimates. Approximates the standard error of the estimator.",
      },
      {
        label: "Percentile CI",
        formula: "$\\text{CI}_{95\\%} = [\\hat{\\theta}^*_{(0.025B)},\\ \\hat{\\theta}^*_{(0.975B)}]$",
        explanation: "Use empirical quantiles of sorted bootstrap estimates. Easy to compute; BCa is more accurate when skew is present.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "What does each bootstrap sample consist of?",
        options: [
          "n observations drawn with replacement from the original data",
          "n observations drawn without replacement from the original data",
          "A new dataset collected from the same population",
          "The original data split into two halves",
        ],
        answer: 0,
        explanation: "Each bootstrap sample is drawn with replacement, so some observations appear multiple times and some not at all.",
      },
      {
        type: "mc",
        question: "The BCa (Bias-Corrected and Accelerated) bootstrap CI is preferred over the simple percentile CI because:",
        options: [
          "It adjusts for bias and skewness in the bootstrap distribution",
          "It requires fewer bootstrap samples",
          "It always produces narrower intervals",
          "It works better with large sample sizes",
        ],
        answer: 0,
        explanation:
          "BCa corrects for bias (the bootstrap center differs from the original estimate) and skewness (asymmetric bootstrap distribution), giving better coverage.",
      },
      {
        type: "tf",
        question: "Bootstrapping is unreliable when the sample size is very small (e.g., n < 20).",
        answer: true,
        explanation:
          "With very small n, the bootstrap distribution poorly approximates the true sampling distribution because there are too few distinct resampled values to capture the population variability.",
      },
      {
        type: "mc",
        question: "You want a confidence interval for the sample median of a non-normal distribution. Which approach is most appropriate?",
        options: ["Bootstrap percentile or BCa interval", "z-interval assuming normality", "t-interval using the sample SD", "Chi-squared interval"],
        answer: 0,
        explanation:
          "The bootstrap makes no distributional assumptions and handles the median naturally, unlike parametric intervals that assume normality.",
      },
    ],
  },

  {
    id: 12,
    title: "ANOVA",
    description: "Comparing means across multiple groups using the F-statistic",
    icon: "📐",
    concepts: [
      "F-statistic",
      "between-group variance",
      "within-group variance",
      "one-way ANOVA",
      "two-way ANOVA",
      "assumptions",
      "Tukey HSD",
      "post-hoc tests",
    ],
    explanation: `ANOVA (Analysis of Variance) tests whether the means of three or more groups are equal by decomposing total variance.

**Core Idea**: If group means differ more than would be expected by within-group noise, we have evidence against equal means. ANOVA partitions total variance (SS_total) into:
- **SS_between** (between groups): variance due to group differences
- **SS_within** (within groups / residual): variance due to random noise within each group

**F-Statistic**: Ratio of between-group mean square to within-group mean square. Large F → group differences are large relative to noise → reject H₀ (equal means).

**One-Way ANOVA**: One factor with k ≥ 3 levels. Tests H₀: μ₁ = μ₂ = … = μₖ.

**Two-Way ANOVA**: Two factors plus their interaction. Can test main effects of each factor and whether the effect of one factor depends on the level of the other (interaction effect).

**Assumptions**:
1. **Independence**: Observations are independent
2. **Normality**: Residuals are approximately normally distributed (robust with large n by CLT)
3. **Homoscedasticity**: Equal variances across groups (Levene's or Bartlett's test)

**Post-Hoc Tests** (after significant ANOVA): Identify which specific pairs of groups differ.
- **Tukey HSD**: Controls family-wise error rate; compares all pairs; recommended for balanced designs
- **Bonferroni**: More conservative; adjusts α by number of comparisons
- **Dunnett's**: Compare treatment groups to a single control group`,
    examples: [
      {
        label: "F-Statistic",
        formula: "$F = \\dfrac{MS_{\\text{between}}}{MS_{\\text{within}}} = \\dfrac{SS_{\\text{between}}/(k-1)}{SS_{\\text{within}}/(N-k)}$",
        explanation: "k = number of groups, N = total observations. Compare to F-distribution with (k−1, N−k) degrees of freedom.",
      },
      {
        label: "SS Decomposition",
        formula: "$SS_{\\text{total}} = SS_{\\text{between}} + SS_{\\text{within}}$",
        explanation: "Total variance partitions into explained (between-group) and unexplained (within-group) components.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "ANOVA tests H₀: all group means are equal. If F is large, what does this indicate?",
        options: [
          "Between-group variance is large relative to within-group variance — evidence against equal means",
          "All groups have the same variance",
          "The sample sizes are unequal",
          "The residuals are non-normal",
        ],
        answer: 0,
        explanation:
          "A large F-statistic means the spread between group means is large compared to the noise within groups, providing evidence that at least one group mean differs.",
      },
      {
        type: "mc",
        question:
          "After a significant one-way ANOVA, you want to know which specific pairs of groups differ while controlling the family-wise error rate. Which test is most appropriate?",
        options: ["Tukey HSD", "Run multiple t-tests without correction", "Chi-squared test", "Another ANOVA with two groups"],
        answer: 0,
        explanation:
          "Tukey HSD (Honestly Significant Difference) is designed for all pairwise post-hoc comparisons after ANOVA and controls family-wise error rate.",
      },
      {
        type: "mc",
        question: "Which assumption of ANOVA requires equal variances across groups?",
        options: ["Homoscedasticity", "Independence", "Normality", "Linearity"],
        answer: 0,
        explanation: "Homoscedasticity (equal variances) is required. Levene's test checks this. Welch's ANOVA relaxes this assumption.",
      },
      {
        type: "tf",
        question: "Two-way ANOVA can detect whether the effect of one factor depends on the level of another factor (interaction effect).",
        answer: true,
        explanation:
          "Two-way ANOVA tests main effects of each factor and their interaction. A significant interaction means the factors are not independent in their effects.",
      },
    ],
  },

  {
    id: 13,
    title: "Nonparametric Tests",
    description: "Distribution-free alternatives to t-tests and ANOVA for non-normal data",
    icon: "🎚️",
    concepts: ["Mann-Whitney U", "Wilcoxon signed-rank", "Kruskal-Wallis", "KS test", "permutation test", "rank-based", "distribution-free"],
    explanation: `Nonparametric tests make no assumptions about the underlying distribution. They work on ranks or permutations rather than raw values.

**When to Use Nonparametric Tests**:
- Data are ordinal (ranks, Likert scales)
- Small sample sizes where normality can't be assumed
- Outliers strongly distort means
- Skewed distributions that don't normalize with transformation

**Key Tests**:

**Mann-Whitney U** (Wilcoxon rank-sum): Two independent groups. Tests whether one group tends to have larger values than the other (rank-based). The nonparametric analog of the two-sample t-test. H₀: the two distributions are the same.

**Wilcoxon Signed-Rank**: Two related/paired samples. Ranks the absolute differences and checks if positive and negative ranks are balanced. Analog of the paired t-test. More powerful than sign test.

**Kruskal-Wallis**: k independent groups. Nonparametric analog of one-way ANOVA. Compares rank distributions. Follow with pairwise Dunn tests (with correction) for post-hoc analysis.

**Kolmogorov-Smirnov (KS) Test**: Tests whether two samples come from the same distribution (or one sample against a reference distribution). Compares empirical CDFs. Sensitive to both location and shape differences.

**Permutation Test**: Shuffles group labels B times; computes test statistic under the null of no group difference. Exact and flexible — works for any test statistic. Most powerful when the parametric assumption is wrong.

**Trade-offs**: Nonparametric tests are less powerful than parametric tests when parametric assumptions hold, but more robust when they don't.`,
    examples: [
      {
        label: "Mann-Whitney U",
        formula: "$U = n_1 n_2 + \\dfrac{n_1(n_1+1)}{2} - R_1$",
        explanation: "R₁ = sum of ranks in group 1. Compare U to critical values. Large-sample: standardize U to z.",
      },
      {
        label: "KS Statistic",
        formula: "$D = \\sup_x |F_1(x) - F_2(x)|$",
        explanation: "Maximum absolute difference between empirical CDFs of the two samples. Reject if D exceeds critical value.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "You have two independent groups with small n and strongly skewed data. Which test is most appropriate?",
        options: ["Mann-Whitney U test", "Two-sample t-test", "Paired t-test", "One-way ANOVA"],
        answer: 0,
        explanation:
          "Mann-Whitney U is a nonparametric test for two independent groups that does not assume normality. It's the right choice when data are skewed or sample sizes are small.",
      },
      {
        type: "mc",
        question: "The Kruskal-Wallis test is the nonparametric analog of:",
        options: ["One-way ANOVA", "Two-sample t-test", "Chi-squared test", "Paired t-test"],
        answer: 0,
        explanation: "Kruskal-Wallis tests for differences across k ≥ 3 independent groups using ranks, just as one-way ANOVA does using means.",
      },
      {
        type: "tf",
        question: "Nonparametric tests are always preferable to parametric tests because they make fewer assumptions.",
        answer: false,
        explanation:
          "When parametric assumptions hold, parametric tests are more powerful (lower Type II error) than nonparametric alternatives. Use nonparametric tests when assumptions are violated.",
      },
      {
        type: "mc",
        question: "The Kolmogorov-Smirnov test compares:",
        options: [
          "Empirical cumulative distribution functions of two samples",
          "Sample means of two groups",
          "Variances of two distributions",
          "Ranks of two paired samples",
        ],
        answer: 0,
        explanation:
          "The KS test measures the maximum absolute difference between two empirical CDFs. It is sensitive to differences in location, spread, and shape.",
      },
    ],
  },

  {
    id: 14,
    title: "Multiple Comparisons & FDR",
    description: "Controlling false discoveries when testing many hypotheses simultaneously",
    icon: "🔢",
    concepts: ["family-wise error rate", "FWER", "false discovery rate", "FDR", "Bonferroni", "Benjamini-Hochberg", "q-value", "multiple testing"],
    explanation: `When testing many hypotheses simultaneously, the probability of at least one false positive grows rapidly. Multiple testing corrections address this.

**The Problem**: At α = 0.05, each test has a 5% false positive rate. With m = 100 independent tests under H₀, you expect ~5 false positives — not because any effect is real, but by chance.

**Family-Wise Error Rate (FWER)**: Probability of at least one false positive across all tests. Grows as 1 − (1 − α)^m for independent tests.

**Controlling FWER**:
- **Bonferroni**: Reject H₀ᵢ if pᵢ < α/m. Simple, very conservative. Controls FWER tightly but loses power with large m.
- **Holm-Bonferroni**: Step-down procedure. Sort p-values; reject H₀ at step k if p_(k) < α/(m−k+1). Less conservative than Bonferroni.

**False Discovery Rate (FDR)**: Expected proportion of false positives among all rejected hypotheses. Less stringent than FWER — appropriate when some false positives are acceptable.

**Benjamini-Hochberg (BH) Procedure** (FDR control):
1. Sort p-values: p_(1) ≤ p_(2) ≤ … ≤ p_(m)
2. Find largest k such that p_(k) ≤ (k/m) · q (desired FDR level, e.g., q = 0.05)
3. Reject all H₀_(1) through H₀_(k)

**q-value**: The minimum FDR at which a hypothesis would be rejected. Analogous to the p-value but for FDR-controlled analyses.

**Practical Guidance**:
- Use Bonferroni when even one false positive is costly (clinical trials, safety-critical decisions)
- Use BH/FDR for genomics, A/B test dashboards, or exploratory analyses where some false positives are acceptable
- Pre-register which hypotheses are primary vs. exploratory`,
    examples: [
      {
        label: "Bonferroni",
        formula: "$\\alpha_{\\text{adjusted}} = \\alpha / m$",
        explanation: "Divides α by the number of tests m. Very conservative but guarantees FWER ≤ α even for correlated tests.",
      },
      {
        label: "BH Threshold",
        formula: "$p_{(k)} \\leq \\dfrac{k}{m} \\cdot q$",
        explanation: "Find the largest rank k meeting this criterion; reject all hypotheses ranked 1 through k. Controls expected FDR at level q.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question:
          "You run 200 hypothesis tests. If all null hypotheses are true and α = 0.05, how many false positives do you expect without correction?",
        options: ["~10", "~0", "~100", "~200"],
        answer: 0,
        explanation: "200 × 0.05 = 10 expected false positives. Without correction, you will likely report spurious findings.",
      },
      {
        type: "mc",
        question: "Which correction controls the False Discovery Rate (FDR) rather than the Family-Wise Error Rate (FWER)?",
        options: ["Benjamini-Hochberg", "Bonferroni", "Holm-Bonferroni", "Šidák correction"],
        answer: 0,
        explanation:
          "Benjamini-Hochberg controls FDR (expected proportion of false positives among rejections). Bonferroni and Holm control FWER (probability of any false positive).",
      },
      {
        type: "tf",
        question: "Bonferroni correction is more conservative (loses more power) than Benjamini-Hochberg when testing many hypotheses.",
        answer: true,
        explanation:
          "Bonferroni controls a stricter criterion (FWER) and therefore requires much smaller p-values to reject, losing power especially with large m. BH is less conservative by controlling FDR instead.",
      },
      {
        type: "mc",
        question: "A q-value of 0.05 for a hypothesis means:",
        options: [
          "If you reject all hypotheses with q ≤ 0.05, at most 5% of rejections are expected to be false positives",
          "There is a 5% chance this specific hypothesis is false",
          "The p-value is 0.05",
          "The test has 5% power",
        ],
        answer: 0,
        explanation:
          "The q-value is the minimum FDR level at which the hypothesis would be rejected. It controls the expected proportion of false discoveries in the rejected set.",
      },
    ],
  },

  {
    id: 15,
    title: "Causal Inference",
    description: "Moving from correlation to causation using DAGs, RCTs, and observational methods",
    icon: "🔀",
    concepts: [
      "DAG",
      "confounder",
      "backdoor criterion",
      "selection bias",
      "RCT",
      "observational study",
      "potential outcomes",
      "counterfactual",
      "ATE",
      "instrumental variable",
    ],
    explanation: `Causal inference answers "what would happen if we intervened?" — not just "what is correlated with what?".

**Correlation ≠ Causation**: A correlation between X and Y can arise because: (1) X causes Y, (2) Y causes X, (3) a confounder Z causes both, or (4) selection/collider bias.

**Potential Outcomes Framework** (Rubin Causal Model):
- For each unit i, define Yᵢ(1): outcome if treated; Yᵢ(0): outcome if untreated
- Individual Treatment Effect: Yᵢ(1) − Yᵢ(0)
- **Average Treatment Effect (ATE)**: E[Y(1) − Y(0)]
- **Fundamental Problem of Causal Inference**: We observe only one potential outcome per unit.

**Directed Acyclic Graphs (DAGs)**:
- Nodes = variables; directed edges = causal relationships
- **Confounder**: A variable Z that causes both X (treatment) and Y (outcome). Biases naïve estimate of X→Y.
- **Collider**: A variable C caused by both X and Y. Conditioning on a collider opens a spurious path (selection bias).
- **Backdoor Criterion**: A set of variables S blocks all backdoor paths from X to Y if S contains no descendants of X. Conditioning on S identifies the causal effect.

**RCT vs. Observational**:
- **RCT (Randomized Controlled Trial)**: Randomization breaks X's dependence on confounders → gold standard for causal identification. Not always feasible (ethical, practical).
- **Observational Methods**: Propensity score matching/weighting, instrumental variables (IV), difference-in-differences (DiD), regression discontinuity (RDD), synthetic control.

**Selection Bias**: Occurs when the study sample is not representative, or conditioning on a collider introduces spurious association. Common in medical studies (healthy worker effect) and web data (survivorship bias).`,
    examples: [
      {
        label: "ATE",
        formula: "$\\text{ATE} = \\mathbb{E}[Y(1) - Y(0)]$",
        explanation:
          "Expected difference in outcomes between treated and untreated potential worlds. Estimable under ignorability (no unmeasured confounders).",
      },
      {
        label: "Ignorability",
        formula: "$\\{Y(0), Y(1)\\} \\perp T \\mid X$",
        explanation:
          "Conditional on observed covariates X, treatment assignment T is independent of potential outcomes. Justifies adjustment via regression, matching, or IPW.",
      },
    ],
    quizzes: [
      {
        type: "mc",
        question: "A confounder Z in a causal diagram is a variable that:",
        options: ["Causes both the treatment X and the outcome Y", "Is caused by both X and Y", "Mediates the effect of X on Y", "Is unrelated to Y"],
        answer: 0,
        explanation:
          "A confounder causes both the treatment (exposure) and the outcome, creating a spurious association between them if not controlled for.",
      },
      {
        type: "mc",
        question: "Why does randomization in an RCT enable causal inference?",
        options: [
          "It makes treatment assignment independent of all confounders, observed and unobserved",
          "It increases the sample size",
          "It eliminates measurement error",
          "It ensures blinding of participants",
        ],
        answer: 0,
        explanation:
          "Randomization severs all backdoor paths from treatment to outcome by making treatment assignment independent of pre-treatment characteristics.",
      },
      {
        type: "tf",
        question:
          "Conditioning on a collider in a regression can introduce a spurious association between two variables that are not causally related.",
        answer: true,
        explanation:
          "Collider bias (Berkson's paradox): if C is caused by both X and Y, conditioning on C opens a non-causal path between X and Y, creating a spurious correlation.",
      },
      {
        type: "mc",
        question: 'The "fundamental problem of causal inference" refers to:',
        options: [
          "We cannot observe both potential outcomes (treated and untreated) for the same unit simultaneously",
          "Causal effects cannot be estimated from data",
          "RCTs are impossible to run in practice",
          "DAGs cannot represent all causal structures",
        ],
        answer: 0,
        explanation:
          "Each unit is either treated or untreated; we observe only one potential outcome. Causal inference methods address this by comparing units or making assumptions about the missing counterfactuals.",
      },
    ],
  },
];
