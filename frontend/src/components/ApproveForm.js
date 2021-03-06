import React, { useState, useEffect } from "react";
import { useLocalStorage } from '@rehooks/local-storage';
export default function ApproveForm({ authToken }) {
  const [qrURL, setQRUrl] = useLocalStorage("qrURL");
  const [disabled, setDisabled] = useState(true);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [pubKey, setpubKey] = useLocalStorage("pubkey");
  
  useEffect(() => {
    checkDisabled();
  });
  const checkDisabled = () => {
    if (authToken && pubKey) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };
  const handleApprove = (evt) => {
    evt.preventDefault();
    const txParams = { pubkey: pubKey, tokenAmount: tokenAmount };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}` },
      body: JSON.stringify(txParams),
    };
    fetch("/api/v0/approve", requestOptions)
      .then((response) => response.json())
      .then(data => setQRUrl(data))
  };
  return (
    <div>
      <form className="transfer-form" onSubmit={handleApprove}>
        <label>
          Public address:
          <input type="text" value={pubKey} name="pubkey" onChange={(e) => setpubKey(e.target.value)} />
        </label>
        <label>
          Token amount:
          <input type="text" value={tokenAmount} name="tokenAmount" onChange={(e) => setTokenAmount(e.target.value)} />
        </label>
        <input type="submit" value="Approve manager to spend your tokens" disabled={disabled} />
      </form>
    </div>
  );
}
