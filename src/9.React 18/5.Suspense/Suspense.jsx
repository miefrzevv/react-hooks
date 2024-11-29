/*
Suspense в React
Suspense — это компонент в React, предназначенный для работы с асинхронными операциями. Он позволяет указать запасной интерфейс (например, индикатор загрузки), который отображается, пока асинхронная операция не завершится.

Этот компонент особенно полезен при ленивой загрузке компонентов (React.lazy) или данных через React Server Components и другие библиотеки для асинхронной загрузки данных.

Как работает Suspense
Асинхронная операция:
React ожидает завершения загрузки данных или компонента.

Показ fallback:
Пока операция не завершена, отображается fallback — запасной UI (например, индикатор загрузки).

Рендер контента:
После завершения операции React заменяет fallback реальным контентом.
*/

import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;

/*
Suspense: Оборачивает ленивый или асинхронный компонент.
fallback: Указывает, что отображать, пока контент загружается.
*/

/*
Примеры использования
1. С ленивой загрузкой компонентов
*/

import React, { Suspense } from 'react';

const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <Suspense fallback={<div>Loading About Section...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
// Каждый ленивый компонент (About, Contact) получает свой собственный fallback.

/*
2. Загрузка данных с библиотекой React Query
Suspense можно использовать для работы с асинхронными данными. Например, с библиотекой React Query:
*/
import { Suspense } from 'react';
import { useQuery } from 'react-query';

function Posts() {
  const { data } = useQuery('posts', fetchPosts);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <Posts />
    </Suspense>
  );
}


/*
3. С React Server Components
В React 18 Suspense работает и с серверными компонентами, позволяя загружать данные на сервере и отображать их на клиенте.
*/

<Suspense fallback={<div>Loading server data...</div>}>
  <ServerComponent />
</Suspense>

/*
Советы по использованию Suspense
Качественный fallback:
Обеспечьте хороший пользовательский опыт при загрузке. Например, используйте индикатор загрузки или placeholder.

Минимизация областей Suspense:
Не оборачивайте весь интерфейс в один Suspense. Разделяйте его на области, чтобы улучшить восприятие интерфейса пользователем.

Комбинация с Error Boundary:
Используйте Error Boundary для обработки ошибок в асинхронных операциях рядом с Suspense.
*/

/*
Ограничения
Поддержка только React-компонентов:
Нельзя использовать Suspense с другими асинхронными функциями напрямую. Для работы с асинхронными данными лучше использовать библиотеки вроде React Query или Redux Toolkit.

SSR:
В React 18 Suspense поддерживается при серверном рендеринге, но требуется правильная настройка серверной инфраструктуры.
*/

/*
Что нового в React 18
Поддержка серверного рендеринга:
Теперь Suspense можно использовать при SSR. React сервер дождется завершения асинхронных операций, прежде чем отправлять готовый HTML клиенту.

Concurrent Mode:
Suspense теперь работает лучше в режиме конкурентного рендеринга, обеспечивая приоритет задач и предотвращая блокировки UI.
*/