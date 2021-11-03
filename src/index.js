import ReactDOM from 'react-dom';

const product = 'MacBook';
const imageUrl = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80';

function handlClick(){
  alert('곧 도착합니다.');
}

ReactDOM.render(
  <>
  <h1>나만의 {product.toUpperCase()} 주문하기</h1>
  <img src={imageUrl} alt="제품사진"/>
  <botton onClick={handlClick}>확인</botton>
  </>,
  document.getElementById('root')
);
