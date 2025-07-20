async function guestShorten() {
  const longUrl = document.getElementById("guestLongUrl").value.trim();
  if (!longUrl) return alert("⚠️ লিংক দিন");

  const res = await fetch("https://urlshortner.online/api/shorten.php", { // Backend API URL
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ longUrl })
  });

  const data = await res.json();
  if (data.shortUrl) {
    document.getElementById("guestShortUrl").value = data.shortUrl;
    document.getElementById("guestResult").style.display = "block";
    document.getElementById("guestMsg").innerText = "✅ শর্ট লিংক তৈরি হয়েছে!";
  } else {
    document.getElementById("guestMsg").innerText = "❌ সমস্যা: " + data.error;
  }
}
