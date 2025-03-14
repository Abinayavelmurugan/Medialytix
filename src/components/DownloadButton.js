import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Example of generating a dynamic CSV report
    const reportData = [
      ["Name", "Followers", "Likes"],
      ["John Doe", 2000, 300],
      ["Jane Smith", 1500, 250],
    ];

    let csvContent = "data:text/csv;charset=utf-8,";
    reportData.forEach(row => {
      csvContent += row.join(",") + "\n";
    });

    // Create a link element
    const encodedUri = encodeURI(csvContent);
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", encodedUri);
    downloadLink.setAttribute("download", "report.csv");

    // Trigger the download
    downloadLink.click();
  };

  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-4 rounded-xl flex items-center space-x-2 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transform transition-all duration-300"
      >
        <i className="fas fa-download text-2xl"></i> {/* Font Awesome Download Icon */}
        <span className="text-lg font-semibold">Download Report</span>
      </button>
    </div>
  );
};

export default DownloadButton;
