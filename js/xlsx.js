/* Optional Excel export helper.
   - SheetJS is not fetched during initial page load.
   - The library loads only when "Export publication list" is clicked.
   - If the CDN is unreachable, the publication data is downloaded as CSV.
   - For an offline-only deployment, keep the CSV fallback and remove the loader. */
(function (global) {
  "use strict";

  var SHEETJS_URL = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";
  var loadingPromise = null;

  function loadSheetJS() {
    if (global.XLSX) return Promise.resolve(global.XLSX);
    if (loadingPromise) return loadingPromise;

    loadingPromise = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = SHEETJS_URL;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = function () {
        if (global.XLSX) resolve(global.XLSX);
        else reject(new Error("The spreadsheet library did not initialize."));
      };
      script.onerror = function () {
        reject(new Error("The spreadsheet library could not be downloaded."));
      };
      document.head.appendChild(script);
    });

    return loadingPromise;
  }

  function csvCell(value) {
    return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
  }

  function downloadCsv(records, filename) {
    var columns = Object.keys(records[0] || {});
    var content = [columns.map(csvCell).join(",")].concat(
      records.map(function (record) {
        return columns.map(function (column) { return csvCell(record[column]); }).join(",");
      })
    ).join("\r\n");

    var blob = new Blob(["\uFEFF", content], { type: "text/csv;charset=utf-8" });
    var objectUrl = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename.replace(/\.xlsx$/i, ".csv");
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }

  function exportRecords(records, filename) {
    if (!Array.isArray(records) || records.length === 0) {
      window.alert("There are no publication records to export.");
      return;
    }

    var safeName = (filename || "publications").replace(/[^\w-]+/g, "-");
    loadSheetJS().then(function (XLSX) {
      var worksheet = XLSX.utils.json_to_sheet(records);
      worksheet["!cols"] = [
        { wch: 10 }, { wch: 20 }, { wch: 75 }, { wch: 90 }
      ];
      var workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Publications");
      XLSX.writeFile(workbook, safeName + ".xlsx", { compression: true });
    }).catch(function () {
      downloadCsv(records, safeName + ".csv");
      window.alert("Excel export was unavailable. Your publication list was downloaded as a CSV file instead.");
    });
  }

  global.DeepthiXLSX = Object.freeze({ exportRecords: exportRecords });
})(window);