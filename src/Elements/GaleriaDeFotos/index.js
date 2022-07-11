import React from "react";
import { Carousel } from 'react-carousel-minimal';
import './GaleriaDeFotos.css'

function AppGaleriaFotos() {
 const data = [
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/150824496_858113891414162_6733799983103512526_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e4UUi0BZRJsAX-Lu3Y5&_nc_ht=scontent-atl3-2.xx&oh=00_AT8jqVBLbF6HiqcL2S4jSASb2KKSWVcaLRaCqA6tbu7b-w&oe=62F1A6C3",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/162030559_874134143145470_6605983985326659071_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=UichQ27Ut5UAX_iNJ7w&_nc_ht=scontent-atl3-2.xx&oh=00_AT-ZhGdFss3r8NtDbKcIV6737qmRqy6NQ1BimfCGrFRtdg&oe=62F3D718",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/135852902_832822267276658_7344628851487441488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=5oq9r2l8H_EAX--yzBM&_nc_ht=scontent-atl3-2.xx&oh=00_AT9FGNqA6I4xvRfDO7S51SgsNh92i-7fHBuDeqVojuvZqQ&oe=62F2ECF2",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/72180834_518313762060845_136722179264872448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=i-Ilq9x5XecAX9qsxe0&_nc_oc=AQnh5q07zkZThamlzKNPXDnVQ9n6QfuRBSvo_JlLNng8pIOq7JcAQuh2ojPXs6afvoQ&_nc_ht=scontent-atl3-2.xx&oh=00_AT9dSxYK6RKIfATfOolnfo2DPPbj1Hm3UXegnljoMNoD9w&oe=62F160F5",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/54799045_409745972917625_2950762443543937024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CtI_ky6G8CgAX_AQOte&_nc_ht=scontent-atl3-2.xx&oh=00_AT9mcC_MASrEp3BBROoEHyn_QSPDcIesh6Xed-IJqC0Fiw&oe=62F17A4E",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/55541897_409745956250960_2114232380561555456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zU65WLmWa9kAX-UTfXl&_nc_ht=scontent-atl3-2.xx&oh=00_AT_zmQiBb1fXcQX_rIVt4izktM_6mYuqDkPbTg6TkSvJ-w&oe=62F05F22",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/55614073_409745852917637_2240214332677816320_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lvKjdkBn5j8AX8hL0Vd&_nc_ht=scontent-atl3-2.xx&oh=00_AT8AsD7g9qwSbw7hvlkiP1kdaNk3RN5PYIy7JCHR96n0bA&oe=62F2A242",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/54516891_408284746397081_5089869058480799744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D0X-bP3Ka-wAX-UElp7&tn=_adgNwBNl21-xloJ&_nc_ht=scontent-atl3-2.xx&oh=00_AT8yWDO7TAR42J8nGaixWqpzUUd9ea-hU0xW7BT2jijqlA&oe=62F3CF3A",
      caption: ""
    },
    {
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/54731277_410576186167937_1455921590389702656_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=fL-uBHrRqWUAX-FfUkr&_nc_ht=scontent-atl3-2.xx&oh=00_AT_KgHCpLNX-YFSQwPlcQEom-QJypnYIsAt6BB2dfAd4UA&oe=62F14B96",
      caption: ""
    },
    {
        image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/72233370_518315742060647_5292854491404566528_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=OKa0RiEf1CAAX9aadT5&_nc_ht=scontent-atl3-2.xx&oh=00_AT--kDzDnpN_H7ridfSuJ9YEF0yRk2fDdQHtx3ad5uSQYA&oe=62F1CAC7",
        caption: ""
    },
    {
        image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/72939752_518315912060630_2035271541423341568_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kROsMQI35WsAX-PjRwn&_nc_ht=scontent-atl3-2.xx&oh=00_AT9HXeKxWO4-1mFwcLLYdQxd5omRwIAvzVUS5eBV_f1G-g&oe=62F39103",
        caption: ""
    },
    {
        image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/72475312_518315128727375_3805031653466701824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=6TE16e73YTMAX_6DRz_&_nc_ht=scontent-atl3-2.xx&oh=00_AT9lqoDkqno-W9mdvjhZ9tFPPv5_7K86ChucH-cg0Op7iQ&oe=62F09CFE",
        caption: ""
      },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="AppGaleriaDeFotos">
      <div style={{ textAlign: "center" }}>
        <h2>Galeria De Fotos</h2>
        <p>Veja as fotos de eventos e momentos de nossa associação.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="800px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AppGaleriaFotos;