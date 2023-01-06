import cert from "/src/uxdesignbootcampcert.png";

function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <img src={cert} alt="cert" className="w-[900px] h-[600px] max-w-[1000px] max-h-[800px] shadow-lg" />
    </main>
  );
}

export default App;
