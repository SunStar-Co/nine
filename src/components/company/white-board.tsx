import Image from 'next/image';

export default function WhiteBoard() {
  const whiteBoardCatalog = [
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjg0/MDAxNzAzNjU3NzgzMTM3.06fTVLAzgvHE9_aLWmmcMF4kAJv77IYN4QCtEVcJcYcg.oCCUX_5swgPi49E1bvUw3dR4dv1VOZDyIEV3YdPZGHMg.JPEG.dlatjsdn205/0001.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMTY2/MDAxNzAzNjU3Nzg1NDIy.khGfK5DHo7HPOMFcY3enpbmB3qmcVDvTCHudE6sMUScg.B0MIDrw2bZ5jaRweYIFj5VA62_tLghBZ2us8iqZyfGIg.JPEG.dlatjsdn205/0002.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMiAg/MDAxNzAzNjU3Nzg4MTU2.lWvqt6Kgi6a8qytBM4swOrJhxIcaXatnujQHLDjSIvsg.lwXmhsfF5yb-ghPRecPZEyNi-DJsJ2K2EQR8S1sF0GMg.JPEG.dlatjsdn205/0003.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjI2/MDAxNzAzNjU3NzkwMzU3.pkLsm6F_cM1VAezFM6M-s5BuT6zni9K12J80rYOvGukg.fEZ6c7FoXBv1fT8TEh2KXVbNTSQDvAWMxMaF3T-vKi8g.JPEG.dlatjsdn205/0004.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjUg/MDAxNzAzNjU3Nzk0Mzg3.wyX_jSOdbGS3ZShx1lLe7s1nB510detG__A0AyEngZcg.lbycDPUjVZ-srsolhH5uin_EcCeGE6KuAFmkuE9uAQgg.JPEG.dlatjsdn205/0005.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjA5/MDAxNzAzNjU3Nzk2MzU3.nNGOjHnSSDPxop4LB-YOJwFvV407mXoZqcGiNzwki-gg.Gp_b6_G6IXevdv-_m0Etm1HpidKqoFZ1M1IGOa406Jkg.JPEG.dlatjsdn205/0006.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjc1/MDAxNzAzNjU3Nzk5MDIz.TjoJpTnVPBjIUM2eJ318cxbzxd3dehDPnFbfXkslqHsg.7wnuuHyxW8Juf4m36VadLSuIWKK8ooFZdFBt1TIdULwg.JPEG.dlatjsdn205/0007.jpg?type=w966',
    'https://postfiles.pstatic.net/MjAyMzEyMjdfMjk2/MDAxNzAzNjU3ODAxMTkw.gtog4wWPxoGxcJDZCEm8sjtKB5Z3eTzi6wMpVNouOzsg.LY1pWwOoYPcyeMcX7F3EUjS-IA-TzVJOzZImYPGcmoUg.JPEG.dlatjsdn205/0008.jpg?type=w966',
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        {whiteBoardCatalog.map((url, i) => {
          return (
            <div key={i} className="w-[673px] h-[945px] relative">
              <Image src={url} alt="catalog" fill />
            </div>
          );
        })}
      </div>
    </>
  );
}
