Drop database if exists `Caro3Person`;
create database `Caro3Person`;
use `Caro3Person`;

create table userTable (
	uID int not null,
	uUsername nvarchar(20) not null,
	uPassword varchar(50) not null,
	uElo int,
	uHistory varchar(16000),
	uGamesWin int,
	uGamesLose int,
	uGames int,
	primary key (uID)
);

create table boardTable(
	bID int not null,
	bBoard varchar(800), -- [x11 ... x1n x21 ...x2n ... xn1 ... xnn]
    bGift varchar(1600), -- [x1 y1 x2 y2 ...]
    bSize int,
    primary key (bID)
);
create table matchTable(
	mID int not null,
	mKeyUserID int not null,
	mUserID varchar(63), -- [userID1 UserID2 UserID3] 
	mGameTime int,
	mAddTime int,
	mBoard int,
	mIsRandomGift bool,
	mEloMin int,
	primary key (mID),
    foreign key (mKeyUserID) references userTable(uID),
    foreign key (mBoard) references boardTable(bID)
);


