import re

with open('c:/Users/dvsat/Desktop/MSL/src/components/Hero.jsx', 'r') as f:
    content = f.read()

# We want to find:
# </h1>
# <p>
# And we want to insert the mobile image between them.
# We also need to get the image src from the same slide.
# A slide is inside <SwiperSlide ...> ... </SwiperSlide>

slides = content.split('<SwiperSlide')

new_content = slides[0]

for slide in slides[1:]:
    # Find the image src in this slide
    img_match = re.search(r'<img src="([^"]+)" alt="([^"]+)" />', slide)
    if img_match:
        src = img_match.group(1)
        alt = img_match.group(2)
        
        # Insert mobile image after </h1>
        mobile_img = f'''
                  <div className="hero-image-col mobile-only-img mobile-only" style={{ margin: '10px 0', width: '100%', padding: 0 }}>
                    <div className="hero-image-panel" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                      <img src="{src}" alt="{alt}" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>'''
                  
        slide = slide.replace('</h1>\n                  <p>', '</h1>\n' + mobile_img + '\n                  <p>')
        
        # Add desktop-only class to the original image column
        slide = slide.replace('<div className="hero-image-col">', '<div className="hero-image-col desktop-only-img desktop-only">')
        
    new_content += '<SwiperSlide' + slide

with open('c:/Users/dvsat/Desktop/MSL/src/components/Hero.jsx', 'w') as f:
    f.write(new_content)

print("Done")
