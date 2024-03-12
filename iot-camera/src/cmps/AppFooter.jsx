function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="app-footer">
      {typeof document !== 'undefined' && (
        <div className="footer" id="footer">
          <p>© {currentYear} Motorola Solutions. All rights reserved.</p>
        </div>
      )}
      </div>
    </>
  );
}
export default AppFooter;