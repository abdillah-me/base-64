import { useEffect } from "react";

const PdfIframe = ({ pdfBase64 }: { pdfBase64: string }) => {
    useEffect(() => {
        const container = document.getElementById("pdf-container-iframe");

        // Clear previous content if any
        if (container) {
            container.innerHTML = ""; // This will remove all previous children elements
        }

        // Embed the PDF using an iframe
        const iframe = document.createElement("iframe");
        iframe.style.width = "80vw";
        iframe.style.height = "100vh"; // Adjust height as needed
        iframe.style.border = "none"; // Ensure no border is applied
        iframe.src = "data:application/pdf;base64," + pdfBase64;
        container?.appendChild(iframe);
    }, [pdfBase64]);
    return (
        <div
            style={{
                width: "80vw",
                height: "100vh",
                overflow: "hidden", // Hide any overflow that may cause scrollbars
            }}
        >
            <div id="pdf-container-iframe"></div>
        </div>
    );
};

export default PdfIframe;
