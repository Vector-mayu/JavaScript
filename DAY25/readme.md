<!-- Data Storage -->
1: store the Questions 
2: store the Options 
3: store the answers

I stored this all information in form of array which consist of total questions in form of objects
Format

obj1 = {
	question : "Who has the most centuries in International cricket?",
	options : [`Sachin Tendulakar`, `Virat Kohli`, `Rickey Pointing`, `MS Dhoni`], 
	answer : "Sachin Tendulkar"
}

this question which can be n number of questions obj1......objn

# I will Create an Array to store all the objects (Questions)
-> QuestionBank = [obj1...obj2...obj3......objn]; 
-> so now i get freedom to randomnly choose 5 question each time 
-> To avoid collision of same questions i will use set to store unique random Questions

# Steps Of JS Logic
S1 : Created Cricket Question Bank from ChatGPT
s2 : To select Random Questions created random Function

