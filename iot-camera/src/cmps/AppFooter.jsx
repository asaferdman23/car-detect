function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="app-footer">
      {typeof document !== 'undefined' && (
        <div className="footer" id="footer">
          <p>© {currentYear} <a href="https://www.linkedin.com/in/asaferdman/">Asaf Erdman</a>. All rights reserved. </p>
        </div>
      )}
      </div>
    </>
  );
}
export default AppFooter;