export type Review = {
  id: string;
  name: string;
  country: string;
  text: string;
  lang?: string;
};

export const reviews: Review[] = [
  {
    id: "daniel",
    name: "DANIEL",
    country: "UNITED STATES",
    text: "I was a little unsure how the whole thing worked at first, so I decided to call. The concierge spoke excellent English and was genuinely helpful on the phone — not just basic phrases, but actually understood what I was asking and explained everything clearly. The pricing was upfront, there were no weird surprises, and my companion was lovely. The whole evening felt relaxed and easy. Definitely one of the highlights of my time in Tokyo.",
  },
  {
    id: "james",
    name: "JAMES",
    country: "UNITED KINGDOM",
    text: "I'd looked at a few similar services before this, but communicating in English was surprisingly difficult. A lot of the time it felt like everything was going through translation apps, so I wasn't always sure we actually understood each other. This was completely different. The team replied quickly, understood exactly what I was looking for, and helped me choose someone who matched the kind of evening I had in mind. She was great company and showed me a side of Tokyo I probably wouldn't have found on my own.",
  },
  {
    id: "carlos",
    name: "CARLOS",
    country: "SPAIN",
    lang: "es",
    text: "Era mi primera vez en Japón y no hablo japonés, así que agradecí muchísimo lo fácil que fue organizar todo. Me explicaron el proceso con claridad y respondieron a mis preguntas sin hacerme sentir que estaba molestando. La chica que conocí fue encantadora y muy divertida. Al final terminamos hablando, riéndonos y recorriendo varios sitios por Shinjuku. Una experiencia que repetiría sin duda.",
  },
  {
    id: "miguel",
    name: "MIGUEL",
    country: "MEXICO",
    lang: "es",
    text: "Lo que más me gustó fue que todo se sintió muy profesional desde el principio. El precio estaba claro, la comunicación fue rápida y nunca sentí presión para reservar. Elegí a mi acompañante con ayuda del concierge y fue una muy buena recomendación. Fue puntual, simpática y la conversación fluyó desde el primer momento. Muy buen servicio.",
  },
  {
    id: "wei",
    name: "WEI",
    country: "TAIWAN",
    lang: "zh-Hant",
    text: "第一次使用這類服務，本來有點擔心，但從詢問開始就讓人很安心。回覆很快，費用和流程也都說明得很清楚，不會有到了現場才突然多出其他費用的情況。見面的女生很親切，也很會照顧第一次來東京的旅客。整個晚上很自然、很輕鬆，完全沒有尷尬的感覺。下次來東京還會考慮再預約。",
  },
];
