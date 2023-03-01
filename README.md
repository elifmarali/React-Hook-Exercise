# useEffect

component didMount

`useEffect(() => {
console.log("componentler 12093712");
}, []);`

all components didUpdate

`useEffect(() => {
console.log("componentler calisti");
});`

counter component didUpdate

`useEffect(() => {
console.log("component laslkd");
}, [counter]);
`
cleanUp gerektiren durumlarda return ile sagliyoruz

`useEffect(() => {
const interval = setInterval(() => {
console.log("Ben iki saniyede bir calisiyorum");
}, 2000);

    return () => {
      clearInterval(interval);
    };

}, []);`

all componentDidMount

`useEffect(() => {
console.log("Mount");
}, []);`

Name componentDidMount and name componentDidUpdate

`useEffect(() => {
console.log("Name Mount");
}, [name]);
`
componentDidMount and componentDidUpdate

`useEffect(() => {
document.title = `${counter} kez tiklandi`;
});
`

# useContext

(Context.js componentinde tema degistirme projesi yapildi)

### Özet: React uygulamalarında state'ler prop'lar yardımıyla parent (üst) componentlardan child (alt) componentlara aktarılır. Uygulama genelinde state'nin aktarıldığı component seviyesi fazla ise yani state birden fazla iç içe componenta aktarılmak isteniyorsa uygulamamız yönetilemez hale gelebilir. React Context'ler component ağacında istediğimiz veriyi prop'lar üzerinden taşımadan componentlar arasında taşımayı sağlar.

React ile uygulama geliştirirken state'ler tanımlarız ve bu state'leri kullanacağımız componentlara prop'lar yardımıyla aktarırız. Aynı seviyedeki componentlarda bu state'i kullanmak istediğimizde ise state'i bir seviye üstteki component'a taşımak zorunda kalırız. Bu akış basit uygulamalarda problem olmayabilir. Fakat uygulama büyüdükçe ve component sayısı arttıkça state'i yönetmek ve component'ların bu state'i kullanmasını sağlamak büyük bir problem haline gelebiliyor.

## React Context API Nasıl Kullanılır?

Paylaşılabilir bir state oluşturmak için ilk yapmamız gereken bir context oluşturmaktır. Context oluşturmak için React.createContext() metodunu kullanılırız. Bu metod oluşturduğumuz context için default değer belirleyebileceğimiz bir parametre alır.

`const ThemeContext = React.createContext('light')

const AuthContext = React.createContext({
isLoggedIn: false,
user: null
})

const MoviesContext = React.createContext({
movies: []
})`

Yukarıdaki örnekte olduğu gibi farklı tiplerde context'ler oluşturabiliyoruz. Oluşturduğumuz context'i kullanabilmek için Context Provider ve Context Consumer olmak üzere iki adet özel component'a ihtiyaç duyarız.

## Context.Provider

Context Provider oluşturduğumuz context'i kullanacak componentların erişebilmesini sağlayan, context güncellemelerinde bu componentların yeniden render olmasını sağlayan ve #oluşturduğumuz context'ten türeyen bir component'tır. Bu component value isminde bir prop alır ve bu prop ile context değerleri child componentlara aktarılır.

`const ToggleContext = React.createContext()

<ToggleContext.Provider value={/_ componentlara dağıtılacak değer _/}>`

💡 Burada Context Provider componentının context'i kullanacak componentların parent'ı olmasına dikkat edilmesi gerekir. Aksi takdirde componentlar context'e erişemezler.

## Context.Consumer

Context Consumer componetları Context Provider ile gönderilen context değerlerini kullanacağımız componentlar içinde erişilebilir hale getirir. Bu component value adında parametreye sahip bir fonksiyon alır ve bu fonksiyonun gövdesinde context değerlerine ulaşabilir hale geliriz.

`<ToggleContext.Consumer>
  {value => /* Herhangi bir render işlemi */}
</ToggleContext.Consumer>`

Bu yöntemi birden fazla context'i kullanan componentlar için önermiyorum. Çünkü birden fazla context'i kullanan component için bu yöntem aşağıdaki gibi çirkin bir görünüme sahip olacaktır.

`<ThemeContext.Consumer>
  {theme => (
    <AuthContext.Consumer>
      {user => <div className={`${theme === 'dark' ? 'dark-theme' : ''}`}>{user.name}</div>}
    </AuthContext.Consumer>
  )}
</ThemeContext.Consumer>`

# Functional Componentlarda Context Kullanımı

Functional componentlarda context değerlerine ulşamak için useContext hook'unu kullanıyoruz. Bu hook parametre olarak oluşturduğumuz context'i alır. Hemen bir önceki örneği functional component kullanarak yapalım.

`import React, { useContext } from 'react'

import AuthContext from './context/AuthContext'
import ThemeContext from './context/ThemeContext'

const Header = () => {
const { isLoggedIn, user } = useContext(AuthContext)
const { theme } = useContext(ThemeContext)

return (

<div className={`${theme === 'dark' ? 'dark-theme' : ''}`}>
{isLoggedIn ? <span>{user.name}</span> : <button>Giriş Yap</button>}
</div>
)
}`

useContext ile hem AuthContext hem de ThemeContext contextlerinin değerlerine ulaşabilmiş olduk.

Context Kaynak: https://ysoftaoglu.com/post/react-context-api-nedir-nasil-kullanilir/
