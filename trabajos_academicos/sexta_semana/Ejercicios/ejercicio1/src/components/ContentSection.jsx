import ArticleList from './ArticleList.jsx';
import Sidebar from './Sidebar.jsx';

function ContentSection() {
  return (
    <main className="main-content">
      <ArticleList />
      <Sidebar />
    </main>
  );
}

export default ContentSection;
