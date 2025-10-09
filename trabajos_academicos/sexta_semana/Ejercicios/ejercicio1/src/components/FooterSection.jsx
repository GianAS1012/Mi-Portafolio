function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <small>&copy; {year} Plataforma Responsive. Todos los derechos reservados.</small>
    </footer>
  );
}

export default FooterSection;
