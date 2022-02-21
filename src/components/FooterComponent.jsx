export default function FooterComponent() {
    return (
      <footer className="footer">
        <span className="text-muted">
          All Rights Reserved {new Date().getFullYear()} Christian Watson
        </span>
      </footer>
    );
  }