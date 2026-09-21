const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 375x812 (iPhone SE / Standard Mobile Phone)
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  console.log('Navigating to http://127.0.0.1:3000/ at 375x812...');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

  // Check metrics
  const metrics = await page.evaluate(() => {
    return {
      bodyScrollWidth: document.body.scrollWidth,
      bodyClientWidth: document.body.clientWidth,
      htmlScrollWidth: document.documentElement.scrollWidth,
      mainScrollWidth: document.querySelector('main')?.scrollWidth,
      mainClientWidth: document.querySelector('main')?.clientWidth
    };
  });
  console.log('Mobile 375px metrics:', metrics);

  // Take full screenshot
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'test-mobile-375x812-full.png'), fullPage: true });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'test-mobile-375x812-vp.png'), fullPage: false });

  // Take screenshot of each section individually
  const sections = [
    { id: 'heroSection', name: 'section-hero.png' },
    { id: 'servicesGrid', name: 'section-services.png' },
    { id: 'astrologersSection', name: 'section-astrologers.png' },
    { id: 'cosmicStoreSection', name: 'section-store.png' },
    { id: 'aiScannerSection', name: 'section-scanner.png' },
    { id: 'interactiveToolsSection', name: 'section-tools.png' },
    { id: 'horoscopeSection', name: 'section-horoscope.png' },
  ];

  for (const s of sections) {
    const el = await page.$(`#${s.id}`);
    if (el) {
      await el.screenshot({ path: path.join(OUTPUT_DIR, s.name) });
      console.log(`Captured ${s.name}`);
    }
  }

  // Test 390x844 (iPhone 12/13/14/15)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'test-mobile-390x844-vp.png'), fullPage: false });

  // Test Desktop 1440x900
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'test-desktop-1440x900.png'), fullPage: false });
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'test-desktop-1440x900-full.png'), fullPage: true });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
