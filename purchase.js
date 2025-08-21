if (body && body.subscriber) {
  body.subscriber.subscriptions = body.subscriber.subscriptions || {};
  body.subscriber.entitlements = body.subscriber.entitlements || {};

  const date = new Date();
  date.setDate(date.getDate() - 1);
  const purchaseDate = date.toISOString();

  body.subscriber.entitlements["Gold"] = {
    expires_date: "2099-12-31T23:59:59Z",
    product_identifier: "locket_gold_lifetime",
    purchase_date: purchaseDate
  };

  body.subscriber.subscriptions["locket_gold_lifetime"] = {
    billing_issues_detected_at: null,
    expires_date: "2099-12-31T23:59:59Z",
    is_sandbox: false,
    original_purchase_date: purchaseDate,
    ownership_type: "PURCHASED",
    period_type: "lifetime",
    purchase_date: purchaseDate,
    store: "app_store",
    unsubscribe_detected_at: null
  };
}

$done({ body: JSON.stringify(body) });
