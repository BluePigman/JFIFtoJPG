(function () {
  var expr = /\.jfif$/;

  chrome.downloads.onDeterminingFilename.addListener(function (
    downloadItem,
    suggest
  ) {
    if (expr.test(downloadItem.filename)) {
      suggest({
        filename: downloadItem.filename.replace(/\.jfif$/, ".jpg"),
      });
    }
  });
})();
