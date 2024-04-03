import styles from "./page.module.css";
import connectDB from "./getdb.js";


const cardData = [
  { img: 'house3.jpg', price: '$1,200,000', address: '123 Maple Street' },
  { img: 'house4.jpg', price: '$950,000', address: '456 Oak Avenue' },
  { img: 'house5.jpg', price: '$780,000', address: '789 Pine Lane' },
  { img: 'house6.jpg', price: '$1,500,000', address: '101 Elm Street' },
  { img: 'house7.jpg', price: '$1,050,000', address: '202 Birch Boulevard' },
  { img: 'house8.jpg', price: '$850,000', address: '303 Cedar Circle' }
];

export default async function Home() {
  const docs = await connectDB();
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <div className={styles.heroImageBefore}></div>
        <div className={styles.contentAboveOverlay}>
          <h1 style={{color:"white", textAlign:'center', marginTop:'10%'}}>Welcome to Real Estate</h1>
          <p style={{color:"white", textAlign:'center', marginTop:'5%'}}>A place to find your dream house</p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt="House" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={styles.cardPrice}>{docs[index].name}</p>
              <p className={styles.cardAddress}>{docs[index].age}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
