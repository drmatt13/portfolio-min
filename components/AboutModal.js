const AboutModal = () => {
  return (
    <div className="flex h-full w-screen animate-fade-in justify-center items-center pointer-events-none">
      <iframe
        className="min-w-fit w-1/2 max-w-xl rounded-md aspect-video animate-fade-in pointer-events-auto"
        src="https://www.youtube.com/embed/D0XIwMgy5oQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AboutModal;
