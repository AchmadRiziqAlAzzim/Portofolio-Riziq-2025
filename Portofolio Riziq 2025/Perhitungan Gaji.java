public class PerhitunganGaji {

    public static void main(String[] args) {
        double makan = 25000,
           transport = 15000,
                bersih;
        System.out.println("PROGRAM MENGHITUNG GAJI KARYAWAN");
        System.out.println("Nama Karyawan : ");
        String nmKar = new Scanner(System.in).next();
        
        System.out.println("Hari Kerja (1 bulan):");
        int hrmasuk = new Scanner(System.in).nextInt();
        
        double ugMkn = hrmasuk * makan;
        double ugTrnsprt = hrmasuk * transport;
        bersih = ugMkn + ugTrnsprt;
        
        System.out.println("Total uang makan \t=" + ugMkn);
        System.out.println("Total uang transport \t=" + ugTrnsprt);
        System.out.println("____________________________________________+");
        System.out.println("Gaji bersih \t\t = Rp." + bersih);
    }
    
}
