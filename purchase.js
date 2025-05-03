(function () {
  const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
  };

  const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];
  const response = JSON.parse($response.body);

  response.Attention = 'Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!';

  const subscriptionInfo = {
    is_sandbox: false,
    ownership_type: 'PURCHASED',
    billing_issues_detected_at: null,
    period_type: 'normal',
    expires_date: '2026-05-01T01:04:17Z',
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: '2025-05-01T01:04:18Z',
    purchase_date: '2025-05-01T01:04:17Z',
    store: 'app_store'
  };

  const entitlementInfo = {
    grace_period_expires_date: null,
    purchase_date: '2025-05-01T01:04:17Z',
    product_identifier: 'com.ohoang7.premium.yearly',
    expires_date: '2026-05-01T01:04:17Z'
  };

  const matchedKey = Object.keys(mapping).find(key => userAgent.includes(key));

  if (matchedKey) {
    const [entitlementName] = mapping[matchedKey];
    entitlementInfo.product_identifier = entitlementName;
    response.subscriber.subscriptions[entitlementName] = subscriptionInfo;
    response.subscriber.entitlements[matchedKey] = entitlementInfo;
  } else {
    response.subscriber.subscriptions['com.ohoang7.premium.yearly'] = subscriptionInfo;
    response.subscriber.entitlements['pro'] = entitlementInfo;
  }

  $done({ body: JSON.stringify(response) });
})();
