import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valoresIniciais = {
    nome: 'Wellington',
    descricao: 'Uma descrição',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    //chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor,  //nome: 'valor'
    })
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ])
      }}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={function funcao(info){
              setValue('nome',info.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="tex"
              value={values.descricao}
              onChange={function funcao(info){
              setValue('descricao',info.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              onChange={function funcao(info){
                setValue('cor',info.target.value);
              }}
            />
          </label>
        </div>
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice)=>{
          return(
            <li key={`${categoria}${indice}`}>{categoria}</li>
          );

        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;