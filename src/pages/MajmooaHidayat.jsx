import bestqurantafseer from "../assets/bestqurantafseer.png"

const MajmooaHidayat = () => {
  const tableData = [
    ["2. Surah Al-Baqara Starting with Para-2"],
    ["3. Surah Al-Imran"],
    ["4. Surah An-Nisaa"],
    ["5. Surah Al-Maeda"],
    ["6. Surah Al-Anaam"],
    ["7. Surah Al-Araf"],
    ["12. Surah Yousuf"],
    ["16. Surah An-Nahl"],
    ["18. Surah Al-Kahf"],
    ["26. Surah Ash-Shuara"],
    ["27. Surah An-Naml"],
    ["28. Surah Al-Qasas"],
    ["36. Surah Yaseen"],
    ["37. Surah Saaffaat"],
    ["38. Surah Saad"],
    ["39. Surah Zamar"],
    ["46. Surah Ahqaaf"],
    ["47. Surah Muhammad"],
    ["48. Surah Fatah"],
    ["50. Surah Qaaf"],
    ["52. Surah Toor"],
    ["53. Surah Najm"],
    ["54. Surah Qamar"],
    ["55. Surah Rahman"],
    ["56. Surah Waqia"],
    ["57. Surah Hadeed"],
    ["58. Surah Mujadila"],
    ["59. Surah Hashr"],
    ["60. Surah Mumtahana"],
    ["61. Surah Saff"],
    ["62. Surah Juma"],
    ["63. Surah Munafiqeen"],
    ["64. Surah Taghabun"],
    ["65. Surah Talaq"],
    ["66. Surah Tehreem"],
    ["67. Surah Mulk"],
    ["68. Surah Qalam"],
    ["69. Surah Al Haaqqa"],
    ["70. Surah Maarij"],
    ["71. Surah Nooh"],
    ["72. Surah Jinn"],
    ["73. Surah Muzzammil"],
    ["74. Surah Muddassir"],
    ["75. Surah Qiyamah"],
    ["76. Surah Al Insaan"],
    ["77. Surah Mursalaat"],
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
          <div className="absolute top-2/6 md:left-20 left-10">
            <p className="md:text-8xl font-serif font-semibold">قَدْ أَفْلَحَ مَن زَكَّاهَا
            </p>
            <p className="md:text-8xl mt-3 font-serif font-semibold">وَقَدْ خَابَ مَن دَسَّاهَا</p>
          </div>
        </div>
        <section className="mb-8 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold">Majmooa Hidayat</h2>
          <h2 className="text-xl font-bold">Tafseer Ul Quran</h2>
          <p className="mb-4 text-justify max-w-3xl mx-auto px-4">
            Muhammad Shoaib Bin Hafiz Muslim was a distinguished Muslim scholar and educator in India,
            renowned for his contributions to Arabic literature and education in the early 19th Century.
            He authored three notable books, reflecting his deep understanding of Islamic teachings
            and Arabic linguistics.
          </p>

        </section>
        <table className="w-auto mx-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">SURAH TAFSEER</th>
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