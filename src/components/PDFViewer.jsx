import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
function PDFViewer({ fileUrl, height, width }) {
  return (
    <div>
      <Document file={fileUrl} loading={false}>
        {width ? (
          <Page
            pageNumber={1}
            width={width}
            height={height}
            renderTextLayer={false}
            renderAnnotationLayer={true}
          />
        ) : (
          <Page
            pageNumber={1}
            height={height}
            renderTextLayer={false}
            renderAnnotationLayer={true}
          />
        )}
      </Document>
    </div>
  );
}

export default PDFViewer;
