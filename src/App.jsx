import tableData from "./surahs";
import bestqurantafseer from "./assets/bestqurantafseer.png"
import { useContext } from "react";
import { DataContext } from "./useFilteredData";

export default function TheBook() {
  // helper to generate PDF link from name

  const {filteredSurahs} = useContext(DataContext)

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
    <div className="overflow-x-auto">
      {/* <Navbar /> */}
      <div
      // style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className="md:h-[550px] border relative">
          <img src={bestqurantafseer} alt="bestqurantafseer" className="w-full h-full md:object-cover" />
          <div className="absolute top-2/6 md:left-20 left-10">
            <p className="md:text-8xl font-serif font-semibold">قَدْ أَفْلَحَ مَن زَكَّاهَا
            </p>
            <p className="md:text-8xl mt-3 font-serif font-semibold">وَقَدْ خَابَ مَن دَسَّاهَا</p>
          </div>
        </div>
        <section className="mb-8 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold">About the Author</h2>
          <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
            Muhammad Shoaib Bin Hafiz Muslim was a distinguished Muslim scholar and educator in India,
            renowned for his contributions to Arabic literature and education in the early 19th Century.
            He authored three notable books, reflecting his deep understanding of Islamic teachings
            and Arabic linguistics.
          </p>
          <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
            <strong>1. Tafseer Ul Quran</strong><br />
            <strong>2. Majmooa Hidayat</strong><br />
            <strong>3. Al Haya Al Akhlaq</strong><br />
          </p>
          <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
            As a grand daughter I have tried my level best to put all as it was but since it was written in 1938 so the pages were damaged.
            May Allah bless his soul and accept his working.
          </p>
          <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
            Zareen Sharaf Fatima
          </p>

        </section>

        {
          filteredSurahs.length > 0 ? <table className="w-auto mx-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Majmooa Hidayat</th>
              <th className="border px-3 py-2">Tafseer ul Quran</th>
              <th className="border px-3 py-2">Al Haya Al Akhlaq</th>
            </tr>
          </thead>
          <tbody>
            {filteredSurahs.map((row, idx) => (
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
        </table> : <table className="w-auto mx-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Majmooa Hidayat</th>
              <th className="border px-3 py-2">Tafseer ul Quran</th>
              <th className="border px-3 py-2">Al Haya Al Akhlaq</th>
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
        }

        {/* <table className="w-auto mx-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Majmooa Hidayat</th>
              <th className="border px-3 py-2">Tafseer ul Quran</th>
              <th className="border px-3 py-2">Al Haya Al Akhlaq</th>
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
        </table> */}

      </div>
      {/* <Footer /> */}
    </div>
  );
}