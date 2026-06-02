export const formatCurrency = (value) => {
  if (typeof value !== 'number') {
    return value;
  }
  return value.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
};

export const generateOrderId = () => {
  const timestamp = Date.now().toString();
  return `ORD-${timestamp.slice(-6)}-${Math.floor(Math.random() * 90 + 10)}`;
};
