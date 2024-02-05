// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mockResponseData = () => [
  {
    id: randomUUID(),
    title: "Ratcatcher",
    genre: "Drama",
    description: "139hMGP1sZHWD59Nvk4ZPFto1VgYRknbkn",
  },
  {
    id: randomUUID(),
    title: "Young Master, The (Shi di chu ma)",
    genre: "Action|Comedy",
    description: "1JanBU23q4URb1AvHFzp9EkUpWWbKxwQ6J",
  },
  {
    id: randomUUID(),
    title: "Holiday Inn",
    genre: "Comedy|Musical",
    description: "17KRTr9JWqcLsDWRijRexPGoMpqcoKTA51",
  },
  {
    id: randomUUID(),
    title: "Morning Glory",
    genre: "Drama|Romance",
    description: "19eYENMEDtMPstqp2qNNXxrrypN4tmCMwc",
  },
  {
    id: randomUUID(),
    title: "Hypocrites",
    genre: "Drama|Fantasy",
    description: "1DDeAB57nbaUt9GtVbrmaoLdV8zicf3SqN",
  },
  {
    id: randomUUID(),
    title: "Elena",
    genre: "Drama",
    description: "1GncgzUeeZir4sAY1XG2oUp1s1TB8WwHPr",
  },
  {
    id: randomUUID(),
    title: "Babyfever",
    genre: "Comedy|Drama",
    description: "1J5a5TTBPVV6gVjNzk8aV4HRRfJ9aK24u2",
  },
  {
    id: randomUUID(),
    title: "Jesus Is a Palestinian (Jezus is een Palestijn)",
    genre: "Comedy",
    description: "1KLAoaBu9vXDGzdrqAJ3bKCMSExz7aArmX",
  },
  {
    id: randomUUID(),
    title: "Nadja",
    genre: "Drama",
    description: "17jaQRjbssSnchVf5QK512oWLZvgX2zVxi",
  },
  {
    id: randomUUID(),
    title: "Gloomy Sunday (Ein Lied von Liebe und Tod)",
    genre: "Drama|Romance",
    description: "1JAdjLaQThR9b6hCDSK5PsrLtEKxikpE3H",
  },
  {
    id: randomUUID(),
    title: "East is East",
    genre: "Comedy",
    description: "14FzWSRt6wm2y3hbm8943Aik6wSbuB5hiD",
  },
  {
    id: randomUUID(),
    title: "Just Married",
    genre: "Comedy|Romance",
    description: "1JSL8Ez3bkkCX638pXffeFFHAr7TSfe16Y",
  },
  {
    id: randomUUID(),
    title: "Nicotina",
    genre: "Action|Comedy|Drama",
    description: "19wDLUshncQE3onwGWxjKzUqEmoNJD3JL2",
  },
  {
    id: randomUUID(),
    title: "Vital Signs",
    genre: "Drama",
    description: "1AXkQks8w5VwDiSmpmV7pJ4KBCeoiL89xg",
  },
  {
    id: randomUUID(),
    title: "National Lampoon's Cattle Call (Cattle Call)",
    genre: "Comedy",
    description: "1tPQGN1k3kxNuBjLiU4ygEAQ38EEeaGSM",
  },
  {
    id: randomUUID(),
    title: "Felon",
    genre: "Crime|Drama",
    description: "1HiPjTMGfx195s6odeHHQrhncjuMia5aiJ",
  },
  {
    id: randomUUID(),
    title: "Tank Girl",
    genre: "Action|Comedy|Sci-Fi",
    description: "1HEhrdMzgnrh6ioUgoDDAuzX9Ucfg64b9P",
  },
  {
    id: randomUUID(),
    title: "Rite, The",
    genre: "Drama|Horror|Thriller",
    description: "17iwqmdKpRFALgdjEn7bWXxzFQGFEQ8DUM",
  },
  {
    id: randomUUID(),
    title: "Sharpe's Gold",
    genre: "Action|Adventure|War",
    description: "1LtChojBsX1mQ2jBAMg8ZbRGtoBR2fP8xK",
  },
  {
    id: randomUUID(),
    title: "Hatful of Rain, A",
    genre: "Drama",
    description: "1LdY5Gmooznhpv8pnXXvK7MnkkhuQKAqvC",
  },
  {
    id: randomUUID(),
    title: "Alien Contamination",
    genre: "Action|Horror|Sci-Fi",
    description: "14iGbstpyFDFJZsBnzmQAG8DkDbanxuiZi",
  },
  {
    id: randomUUID(),
    title: "Bedtime Stories",
    genre: "Adventure|Children|Comedy",
    description: "15HeYQfAEZNJSX9VDRcdGtpN6gPnWWyK3g",
  },
  {
    id: randomUUID(),
    title: "Just Write",
    genre: "Comedy",
    description: "1NkkG8TUDG5hgR6kjpWsRKb3P5N2KL29iS",
  },
  {
    id: randomUUID(),
    title: "Man Who Loved Women, The (Homme qui aimait les femmes, L')",
    genre: "Comedy|Drama|Romance",
    description: "1M3nzePgAya7n74g7bc4x4B92ijm1xkTgH",
  },
  {
    id: randomUUID(),
    title: "White Oleander",
    genre: "Drama",
    description: "1QGWoPkFrQv5R9KtRAAt5zKYLoy1mkhzmX",
  },
  {
    id: randomUUID(),
    title: "Wages of Fear, The (Salaire de la peur, Le)",
    genre: "Action|Adventure|Drama|Thriller",
    description: "172zaJBTPE3m1WKJfYVMG6ASxXfuNCpr6d",
  },
  {
    id: randomUUID(),
    title: "Raja",
    genre: "Drama",
    description: "1HpYLLGP2jhiLoZSWLdBkV4n2YKu3k6t5j",
  },
  {
    id: randomUUID(),
    title: "Nomads",
    genre: "Horror|Mystery|Thriller",
    description: "1A5wodZf3jMmvvkgkaDYWPb187PE11qR1E",
  },
  {
    id: randomUUID(),
    title: "Terror's Advocate (Avocat de la terreur, L')",
    genre: "Documentary",
    description: "1NoX49tYJB9GvQYaYLXfrV715jKQTPw1PX",
  },
  {
    id: randomUUID(),
    title: "A Husband of Round Trip",
    genre: "Comedy|Fantasy",
    description: "1MGwNoMAjTdsEYBX11zz84NMpRMxaqax8x",
  },
  {
    id: randomUUID(),
    title:
      "Myriad of Lights (Lights of Ten Thousand Homes, The) (Wanjia denghuo)",
    genre: "Drama",
    description: "1LBBcF1Yu9cCHua7ACb1dzikdD77MMWakh",
  },
  {
    id: randomUUID(),
    title: "Hard Rain",
    genre: "Action|Crime|Thriller",
    description: "12AgJnkcjtbvmLzPGMkTcfurVReKSxTXmV",
  },
  {
    id: randomUUID(),
    title: "Dimples",
    genre: "Musical",
    description: "13e29rgviMmUdNV8uoL6Sd5mmy3TRYscvS",
  },
  {
    id: randomUUID(),
    title: "About Adam",
    genre: "Comedy",
    description: "1N2aBtoQoQ8ZAuUV2i7imLnyiNsjWgaGQS",
  },
  {
    id: randomUUID(),
    title: "Love and Other Troubles",
    genre: "Comedy|Romance",
    description: "14UBHXD9jJDSRDk2x9VsbA3ASrrPiv8Qbm",
  },
  {
    id: randomUUID(),
    title: "Wolf Creek",
    genre: "Crime|Horror|Thriller",
    description: "19K3KE6uFNtWoYm2SZpvLhLzaoLp3qsS1g",
  },
  {
    id: randomUUID(),
    title: "Sure Thing, The",
    genre: "Comedy|Romance",
    description: "1Gh6rYheUmT6Mg5EeuXKBF4b2QmrUcNpoZ",
  },
  {
    id: randomUUID(),
    title: "Johnny Mad Dog",
    genre: "Drama|War",
    description: "1LvyhEDz1qCff8dD1KL1puWMnQfykJ5FDK",
  },
  {
    id: randomUUID(),
    title: "Bad Medicine",
    genre: "Comedy",
    description: "12VRMeqwrpB1TmGACeiBotiYyxyRTcP28Y",
  },
  {
    id: randomUUID(),
    title: "Assisted Living",
    genre: "Comedy|Drama",
    description: "1N82Xxz6y37x2k25SLWsGTzmRniBNVCYQn",
  },
  {
    id: randomUUID(),
    title: "I Have Found It (Kandukondain Kandukondain)",
    genre: "Comedy|Drama|Musical|Romance",
    description: "1BqAK9ACAXVkxgq1rTyHAwHWy8HpUM2vgT",
  },
  {
    id: randomUUID(),
    title: "I'll Cry Tomorrow",
    genre: "Drama",
    description: "19axWryTrkvPMos4tokFwakGJSGTqd3KtN",
  },
  {
    id: randomUUID(),
    title: "Baby Boy",
    genre: "Crime|Drama",
    description: "17XHDuQ8Wj5hXSm4qZJqesH6BzH2kUgCBe",
  },
  {
    id: randomUUID(),
    title: "Sympathy for Mr. Vengeance (Boksuneun naui geot)",
    genre: "Crime|Drama",
    description: "1719f234GeQdqpYnJ29tm1N2cgmHkbaibJ",
  },
  {
    id: randomUUID(),
    title: "Ordinary Miracles",
    genre: "Drama",
    description: "1FB6x1k2ivHXux6ghEBy9yQsaBv5cAqSbc",
  },
  {
    id: randomUUID(),
    title: "Which Way to the Front?",
    genre: "Comedy|War",
    description: "12USt5qnuH1QhTfZkY5A4d75jYKY5TMCUi",
  },
  {
    id: randomUUID(),
    title: "MacGruber",
    genre: "Action|Comedy",
    description: "1EeYyHgW6YSsjojs3ixLrAepAwzCRY7dDh",
  },
  {
    id: randomUUID(),
    title:
      "Great Ecstasy of Woodcarver Steiner, The (Große Ekstase des Bildschnitzers Steiner, Die)",
    genre: "Documentary",
    description: "1gQHrgNk7UJfjbjbTA4gxqARWEWVNGi3j",
  },
  {
    id: randomUUID(),
    title: "Dominion: Prequel to the Exorcist",
    genre: "Horror|Thriller",
    description: "1DDZHynPjRnznJ1H94pcGbNYvt9w6sSz5k",
  },
  {
    id: randomUUID(),
    title: "Flannel Pajamas",
    genre: "Romance",
    description: "12xLRUxb69g4UauAFv7kSJ9nfJrc3hqsZJ",
  },
];

import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  id: string;
  title: string;
  description: string;
  genre: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { status: string }>
) {
  const { offset, step } = req.query as { offset: string; step: string };
  if (!Number(offset)) {
    return res.status(400).json({ status: "offset은 숫자형태로 와야 합니다." });
  }

  if (Number(offset) > mockResponseData().length) {
    return res
      .status(400)
      .json({ status: "offset이 데이터 전체 길이를 초과합니다." });
  }
  if (!Number(step) && Number(step) !== 0) {
    return res.status(400).json({ status: "step은 숫자형태로 와야 합니다." });
  }
  setTimeout(() => {
    res.status(200).json(mockResponseData());
  }, 2000);
}
