## Soal 1
![Soal 1](screenshoot/soal1.png)

**Apa yang telah saya pelajari:**
Pada praktikum ini, saya belajar cara meluncurkan (*deploy*) aplikasi Next.js ke internet menggunakan layanan Vercel. Saya memulainya dengan membuat repositori baru dari sebuah *template* starter code, lalu menghubungkan akun GitHub saya dengan Vercel.

Satu hal penting yang saya pelajari adalah fitur integrasi berkelanjutan dari Vercel. Dengan menghubungkan repositori GitHub, setiap kali saya melakukan perubahan ke *main branch*, Vercel akan secara otomatis menerapkan ulang aplikasi saya tanpa memerlukan konfigurasi tambahan. Selain itu, saat membuka *pull requests*, Vercel memberikan pratinjau instan untuk melihat perubahan sebelum digabungkan.
## Soal 2
![Soal 2](screenshoot/Soal2.png)

**Apa yang telah saya pelajari:**
Pada praktikum ini, saya belajar cara membuat dan menghubungkan basis data (*database*) PostgreSQL tanpa server (*serverless*) menggunakan layanan Neon terintegrasi di Vercel. 

Beberapa poin penting yang saya pelajari meliputi:
1. **Penyimpanan Kredensial:** Kredensial koneksi database tidak boleh ditulis langsung di dalam kode. Saya menggunakan fitur *Copy Snippet* dari Vercel dan meletakkannya di dalam file `.env` lokal.
2. **Keamanan dengan `.gitignore`:** Saya memastikan file `.env` masuk ke dalam `.gitignore` agar informasi sensitif seperti URL dan *password* database tidak ikut ter-*push* dan terekspos secara publik di GitHub.
3. **Instalasi SDK:** Saya menginstal paket penghubung via terminal (`@vercel/postgres`) agar aplikasi Next.js dapat berinteraksi langsung dengan basis data menggunakan *query* SQL.