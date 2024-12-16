async function fetchLatestCommit() {
  const apiURL =
    "https://api.github.com/repos/donghun-choi/donghun-choi.github.io/commits";
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const latestCommit = data[0].commit.message; // 최신 커밋 메시지
    document.getElementById("latest-commit").innerText = latestCommit;
  } catch (error) {
    console.error("Error fetching the latest commit:", error);
    document.getElementById("latest-commit").innerText =
      "Failed to load commit message.";
  }
}
fetchLatestCommit();
