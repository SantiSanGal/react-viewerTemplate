import './App.css'

function App() {

  const handleClick = () => {
    // var iframe = document.getElementById('inlineFrameExample').toggleAttribute('class', 'hide');
    
    // var iframeContent = iframe.contentDocument || iframe.contentWindow.document;

    // var videoElement = iframeContent.querySelector("video");

    // if (videoElement) {
    //   videoElement.volume -= 0.1;
    // }
  }

  return (
    <>
      <div className="contenedor">
        <div className="principal">
          <div className="video-contenedor">
            <iframe 
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="100%"
              src="https://content.jwplatform.com/previews/0qRytEJD"
              frameBorder="0"
            >
            </iframe>
          </div>
          <div className="tickets-llamados">
            <button onClick={handleClick}> X </button>
            Tickets Llamados
          </div>
        </div>
        <div className="pie-contenedor">
          <div className="ult-ticket-llamado">Último Ticket Llamado</div>
          <div className="fecha">Fecha</div>
          <div className="logo">Logo</div>
        </div>
      </div>

    </>
  )
}

export default App
