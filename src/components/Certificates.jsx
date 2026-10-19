const certificateTitles = {
  '0195_Atharva_Navanath_Nimbalkar.pdf': 'Atharva Navanath Nimbalkar',
  'andrewNGdeeplearning.pdf': 'Deep Learning',
  'AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20260428-32-vkj6ol.pdf':
    'AWS Academy Cloud Developing',
  'cumminsctf (1).pdf': 'Cummins CTF',
  'DSA_CTF.jpg': 'DSA CTF',
  'MERNSTACK.png': 'MERN Stack',
  'My Learning _ NVIDIA.pdf': 'NVIDIA Learning',
};

const certificateFiles = import.meta.glob('../assets/certifcates/*.{pdf,jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const certificates = Object.entries(certificateFiles)
  .map(([path, src]) => {
    const fileName = path.split('/').pop();
    return {
      fileName,
      src,
      title: certificateTitles[fileName] || fileName.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' '),
      isPdf: fileName.toLowerCase().endsWith('.pdf'),
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const Certificates = () => (
  <section id="certificates" className="bg-transparent text-white py-20 md:py-28 px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16">
        <div>
          <p className="text-[#ccff00] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Learning & recognition
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none">
            Certificates
          </h2>
        </div>
        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-md">
          A collection of certificates and achievements from my learning and project journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {certificates.map((certificate, index) => (
          <a
            key={certificate.fileName}
            href={certificate.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${certificate.title} certificate in a new tab`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-[#ccff00]/50 hover:bg-white/[0.07]"
          >
            <div className="h-56 sm:h-60 overflow-hidden bg-[#111]">
              {certificate.isPdf ? (
                <iframe
                  src={`${certificate.src}#toolbar=0&navpanes=0&view=FitH`}
                  title={certificate.title}
                  loading="lazy"
                  className="h-full w-full pointer-events-none"
                />
              ) : (
                <img
                  src={certificate.src}
                  alt={certificate.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] text-[#ccff00] uppercase mb-2">
                  Certificate {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-white">{certificate.title}</h3>
              </div>
              <span aria-hidden="true" className="text-xl text-white/60 transition-colors group-hover:text-[#ccff00]">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
