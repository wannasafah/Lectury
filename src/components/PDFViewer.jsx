import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
function PDFViewer({ fileUrl }) {
  return (
    <div>
      <Document file={fileUrl} loading={false}>
        <Page pageNumber={1} height={200} renderTextLayer={false} renderAnnotationLayer={true}/>
      </Document>
    </div>
  );
}

export default PDFViewer;