export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Center</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighborhood concern</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Airbnb-friendly apartments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>&copy; 2023 Airbnb, Inc.</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Terms</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Sitemap</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Privacy</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Your Privacy Choices</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>English (US)</span>
            <span>$ USD</span>
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

