"use client";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  function fetchGmailData() {
    // Make an API request to your Python server to fetch Gmail data here.
  }
  return (
    <MainLayout>
      Track My Package
      <h1>Gmail App</h1>
      <button onClick={() => fetchGmailData()}>Fetch Gmail Data</button>
    </MainLayout>
  );
}
