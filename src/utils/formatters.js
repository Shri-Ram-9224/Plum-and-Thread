/**
 * Indian Rupee currency formatter
 */
export const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Currency formatter with decimal support (for exact taxes)
 */
export const formatINRDecimal = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format percentage
 */
export const formatPercent = (decimal) => {
  return `${Math.round(decimal * 100)}%`;
};

/**
 * Generate a deterministic or random Quote Reference ID
 */
export const generateQuoteId = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `PT-${year}-${random}`;
};
