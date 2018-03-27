export function downloadFile(blob) {
  /*let blob = new Blob([data], {type: 'application/vnd.ms-excel'}); */
  let url = window.URL.createObjectURL(blob);
  window.open(url);
  url = url + '';
}
