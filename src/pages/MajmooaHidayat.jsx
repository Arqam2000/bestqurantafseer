import bestqurantafseer from "../assets/majmooahidayat.png"

const MajmooaHidayat = () => {
  const tableData = [
    ["Preface"],
    ["Chapter 1"],
    ["Chapter 2"],
  ];

  const getPdfLink = (name) => {
    if (!name) return null;
    // extract last word (like Ahqaaf, Baqara, etc.)
    const words = name.split(" ");
    const lastWord = words[words.length - 1]
      // .replace(/[^a-zA-Z]/g, "") // remove special chars
      .toLowerCase();
    return `https://lamaesthetic.co.uk/uploads/surahs/${lastWord.toLowerCase().replaceAll("-", "")}.pdf`;
  };
  return (
    <div>
      <div className="bg-emerald-100">
        <div className="md:h-80 border relative">

          <img src={bestqurantafseer} alt="bestqurantafseer" className="w-full h-full md:object-cover" />

          <div className="absolute top-1/5 md:right-10 right-10">
            <p className="md:text-5xl font-serif">مَنِ اہۡتَدٰی فَاِنَّمَا یَہۡتَدِیۡ لِنَفۡسِہٖ</p>
            <p className="md:text-5xl mt-3 font-serif">وَ مَنۡ ضَلَّ فَاِنَّمَا یَضِلُّ عَلَیۡہَا</p>

          </div>
          <div className="absolute top-2/5 left-5">
            <h1 className=" mb-4 mt-4 text-3xl md:left-10 left-10 font-bold">MAJMOOA HIDAYAT ---- <em> Open doors to wisdom</em></h1>

          </div>
        </div>


        <section className="text-center ">
          <h1 className=" mb-4 mt-4 text-xl font-bold">MAJMOOA HIDAYAT </h1>
          <p></p>
          <p className="mb-4 text-justify max-w-6xl mx-auto px-4">
            <strong><em>Majmooa Hidayat</em></strong> is the Urdu translation of the renowned Arabic book <strong><em>Rooh-ul-Sunna wa Nazar ila Kemeya Yaqeen</em></strong> , authored by the distinguished scholar Muhaddis Ahmed Bin Idrees.
            This translation, prepared by Muhammad Shoaib on August 1921, was created with the intention of making the wisdom of this book accessible to every reader, so that all can benefit from its timeless guidance.
            The book serves as a beautiful roadmap in understanding the Sunnah and demonstrates how one can live a conscious, productive and successful life by applying simple Sunnah practices in daily living.
          </p>
          <p className="mb-2 text-justify max-w-6xl mx-auto px-4">
            To make study easier, the book has been divided into two main sections:
          </p>
          <p className="mb-1 text-justify max-w-6xl mx-auto px-4">
            Chapter# 1:
          </p>
          <p className="mb-2 text-justify max-w-6xl mx-auto px-4">
            Chapter# 2:
          </p>

        </section>
        <table className="w-auto mx-auto border border-gray-300 ">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2"><h1><strong>Majmooa Hidayat</strong></h1> <em>(Read the book by clicking below )</em></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, i) => {
                  const pdf = getPdfLink(cell);
                  return (
                    <td key={i} className="border px-3 py-2">
                      {pdf ? (
                        <a
                          href={pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {cell}
                        </a>
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MajmooaHidayat