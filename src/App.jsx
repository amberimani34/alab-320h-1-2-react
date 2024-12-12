import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css'

function App() {
 

  return (
    <>
    <div className='app'>
    <Header />
    <Article date='11/12/20' title='On the Street in Brooklyn' img='https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg' alt='women in orange dress against a blue wall' article='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet purus eget nunc sollicitudin cursus vel ac lacus. Aenean nec libero ut ligula dapibus fermentum. In sed odio vel odio fermentum malesuada ac ac neque. Vivamus auctor, ante eu tincidunt gravida, urna dui tempor nisi, id eleifend arcu neque id ligula. Sed bibendum leo ac nisl cursus, et tristique magna ultricies. Phasellus vitae ligula sit amet sem auctor efficitur. Fusce ac urna ut dui tempor interdum sit amet vel libero. Curabitur viverra hendrerit felis, sed aliquet lectus gravida nec. Nullam malesuada sem et tortor aliquam interdum. Sed nec sem vestibulum, lobortis risus vel, interdum erat. Morbi gravida ligula id ligula tincidunt, vel lacinia nisi aliquet. Duis sit amet scelerisque ligula. Ut cursus libero neque, id suscipit nisl dignissim et.' />
    <Article date='11/11/20' title='Vintage in Vogue' img='https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg' alt='people staring off and leaning on each other' article='Etiam fringilla sem vel odio iaculis auctor. Fusce ut metus vulputate, fermentum ipsum eget, mollis velit. Proin placerat leo vitae orci lacinia mollis. Vestibulum et bibendum elit. Curabitur condimentum, nisi et tincidunt cursus, ligula leo feugiat lectus, non aliquet augue leo sit amet nunc. Integer ut ante nec orci tincidunt tristique at sit amet turpis. Nunc volutpat sapien id purus tincidunt, eget convallis eros aliquet. Nam ac est vestibulum, luctus nunc at, vehicula augue. Fusce et metus nisi. Etiam nec magna ligula. Phasellus feugiat diam sit amet dui gravida, at scelerisque ante blandit. Cras nec turpis nisl. Mauris interdum fermentum suscipit. Nulla facilisi. Nam id dolor sapien. Ut fermentum vulputate libero, a cursus magna consectetur non. Aliquam erat volutpat.' />
    <Footer />
    </div>
    </>
  )
}

export default App
