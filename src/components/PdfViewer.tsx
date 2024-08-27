import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import PdfEmbed from "./PdfEmbed";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PdfViewer = ({ pdfBase64 }: { pdfBase64: string }) => {
    
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const pdfContentType = "application/pdf";
    const base64toBlob = (data: string) => {
        const bytes = atob(data);
        let length = bytes.length;
        const out = new Uint8Array(length);

        while (length--) {
            out[length] = bytes.charCodeAt(length);
        }

        return new Blob([out], { type: pdfContentType });
    };

    const url = URL.createObjectURL(base64toBlob(pdfBase64));

    return (
        <>
            <div
                style={{
                    padding: "1rem",
                    border: "1px solid black",
                    width: "700px",
                    height: "600px",
                }}
            >
                <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
                >
                    <Viewer
                        defaultScale={1.1}
                        enableSmoothScroll
                        fileUrl={url}
                        // plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
            <PdfEmbed base64={pdfBase64}/>
        </>
    );
};

export default PdfViewer;
