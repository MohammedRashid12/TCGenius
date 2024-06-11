document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button'); // Get the search button element
    const searchInput = document.getElementById('search-input'); // Get the search input field element

    const watchlistTable = document.querySelector('#watchlist-items'); // Get the tbody element of the watchlist table

    const homeButton = document.getElementById('home-button'); // Get the home button element

    const addButton = document.getElementById('add-to-watchlist'); // Get the add to watchlist button element
    const addModal = document.getElementById('add-modal'); // Get the add modal element
    const closeAddModal = document.getElementById('close-add-modal'); // Get the close button for add modal

    const loginModal = document.getElementById('login-modal'); // Get the login modal element
    const signupModal = document.getElementById('signup-modal'); // Get the signup modal element

    const inspectModal = document.getElementById('inspect-modal'); // Get the inspect modal element
    const closeInspectModal = document.getElementById('close-inspect-modal'); // Get the close button for inspect modal

    const addForm = document.getElementById('add-form'); // Get the add form element

    const loginForm = document.getElementById('login-form'); // Get the login form element
    const signupForm = document.getElementById('signup-form'); // Get the signup form element

    const switchToSignupButton = document.getElementById('switch-to-signup'); // Get the switch to signup button element

    const logo = document.getElementById('logo'); // Get the TCGenius logo element

    const cardSetSelect = document.getElementById('card-set'); // Get the set name select element
    const cardNameInput = document.getElementById('card-name'); // Get the card name input element
    const cardNamesDatalist = document.getElementById('card-names'); // Get the card names datalist element

    // Sample data for sets and card names with IDs
    const cardData = {
        'Shadows of the Galaxy': [ 
            { id: 549492, name: "Hunter - Outcast Sergeant" },
            { id: 549497, name: "Bo-Katan Kryze - Princess in Exile" },
            { id: 549498, name: "Pyke Sentinel" },
            { id: 549499, name: "First Light - Headquarters of the Crimson Dawn" },
            { id: 549500, name: "Calculated Lethality" },
            { id: 549501, name: "Razor Crest - Reliable Gunship" },
            { id: 549502, name: "Gentle Giant" },
            { id: 549503, name: "The Mandalorian - Wherever I Go, He Goes" },
            { id: 549504, name: "Follower of The Way" },
            { id: 549505, name: "Vigilant Pursuit Craft" },
            { id: 549506, name: "Phase-III Dark Trooper" },
            { id: 549507, name: "Crosshair - Following Orders" },
            { id: 549508, name: "Pirate Battle Tank" },
            { id: 549509, name: "Clone Deserter" },
            { id: 549510, name: "Echo - Restored" },
            { id: 549511, name: "Privateer Crew" },
            { id: 549512, name: "Reputable Hunter" },
            { id: 549513, name: "Timely Intervention" },
            { id: 549514, name: "Take Captive" },
            { id: 549515, name: "Death Watch Loyalist" },
            { id: 549518, name: "Ruthlessness" },
            { id: 549520, name: "Ketsu Onyo - Old Friend" },
            { id: 549521, name: "Nite Owl Skirmisher" },
            { id: 549523, name: "Koska Reeves - Loyal Nite Owl" },
            { id: 549524, name: "Cripple Authority" },
            { id: 549525, name: "Clan Challengers" },
            { id: 549526, name: "IG-11 - I Cannot Be Captured" },
            { id: 549528, name: "Covetous Rivals" },
            { id: 549529, name: "Hotshot DL-44 Blaster" },
            { id: 549530, name: "Doctor Evazan - Wanted on Twelve Systems" },
            { id: 549531, name: "L3-37 - Droid Revolutionary" },
            { id: 549532, name: "Omega - Part of the Squad" },
            { id: 549533, name: "Spare the Target" },
            { id: 549535, name: "Ma Klounkee" },
            { id: 549536, name: "Relentless Pursuit" },
            { id: 549537, name: "Tech - Source of Insight" },
            { id: 549538, name: "This Is The Way" },
            { id: 549539, name: "Moff Gideon - Formidable Commander" },
            { id: 549540, name: "The Mandalorian - Sworn To The Creed" },
            { id: 549542, name: "Grogu - Irresistible" },
            { id: 549543, name: "Wanted" },
            { id: 549545, name: "Gideon's Light Cruiser - Dark Troopers' Station" },
            { id: 549547, name: "The Mandalorian's Rifle" },
            { id: 551406, name: "Boba Fett - Daimyo" },
            { id: 551410, name: "Hylobon Enforcer" },
            { id: 551412, name: "Rose Tico - Dedicated to the Cause" },
            { id: 551414, name: "The Armorer - Survival Is Strength" },
            { id: 551416, name: "Moisture Farmer" },
            { id: 551418, name: "Top Target" },
            { id: 551420, name: "Freetown Backup" },
            { id: 551421, name: "Sundari Peacekeeper" },
            { id: 551423, name: "Price on Your Head" },
            { id: 551434, name: "Krrsantan - Muscle for Hire" },
            { id: 551436, name: "Wrecker - Boom!" },
            { id: 551439, name: "Guild Target" },
            { id: 551441, name: "Fennec Shand - Loyal Sharpshooter" },
            { id: 552040, name: "Hondo Ohnaka - That's Good Business" },
            { id: 552041, name: "Bossk - Hunting His Prey" },
            { id: 552046, name: "Lando Calrissian - With Impeccable Taste" },
            { id: 552047, name: "Doctor Pershing - Experimenting With Life" },
            { id: 552048, name: "Death Trooper" },
            { id: 552049, name: "The Client - Dictated by Discretion" },
            { id: 552052, name: "Clan Wren Rescuer" },
            { id: 552053, name: "Kuil - I Have Spoken" },
            { id: 552055, name: "Village Protectors" },
            { id: 552132, name: "HWK-290 Freighter" },
            { id: 552133, name: "System Patrol Craft" },
            { id: 552135, name: "Survivors' Gauntlet" },
            { id: 552136, name: "Cargo Juggernaut" },
            { id: 552139, name: "Public Enemy" },
            { id: 552140, name: "Foundling" },
            { id: 552141, name: "Resilient" },
            { id: 552142, name: "Mandalorian Armor" },
            { id: 552150, name: "Vambrace Grappleshot" },
            { id: 552151, name: "Unexpected Escape" },
            { id: 552152, name: "Fell the Dragon" },
            { id: 552153, name: "General Tagge - Concerned Commander" },
            { id: 552154, name: "Outland TIE Vanguard" },
            { id: 552156, name: "Seasoned Shoretrooper" },
            { id: 552157, name: "Superlaser Technician" },
            { id: 552158, name: "Remnant Reserves" },
            { id: 552159, name: "Modded Cohort" },
            { id: 552161, name: "Warzone Lieutenant" },
            { id: 552162, name: "Kihraxz Heavy Fighter" },
            { id: 552164, name: "Discerning Veteran" },
            { id: 552165, name: "Legal Authority" },
            { id: 552166, name: "Outflank" },
            { id: 552168, name: "Moment of Glory" },
            { id: 552169, name: "Dengar - The Demolisher" },
            { id: 552170, name: "Punishing One - Dengar’s Jumpmaster" },
            { id: 552172, name: "Jango Fett - Renowned Bounty Hunter" },
            { id: 552174, name: "Cartel Turncoat" },
            { id: 552178, name: "Zorii Bliss - Valiant Smuggler" },
            { id: 552182, name: "Millennium Falcon - Lando’s Pride" },
            { id: 552183, name: "Reckless Gunslinger" },
            { id: 552185, name: "Scanning Officer" },
            { id: 552187, name: "Chain Code Collector" },
            { id: 552214, name: "Snapshot Reflexes" },
            { id: 552215, name: "Boba Fett's Armor" },
            { id: 552216, name: "Incinerator Trooper" },
            { id: 552217, name: "Snowtrooper Lieutenant" },
            { id: 552218, name: "Cell Block Guard" },
            { id: 552219, name: "Greef Karga - Affable Commissioner" },
            { id: 552220, name: "Smuggler's Aid" },
            { id: 552221, name: "Mandalorian Warrior" },
            { id: 552222, name: "Rich Reward" },
            { id: 552223, name: "Confiscate" },
            { id: 552224, name: "Protector of the Throne" },
            { id: 552444, name: "Kylo Ren - Rash and Deadly" },
            { id: 552449, name: "Rickety Quadjumper" },
            { id: 552451, name: "Palpatine’s Return" },
            { id: 552452, name: "Finalizer - Might of the First Order" },
            { id: 552454, name: "Kylo’s TIE Silencer - Ruthlessly Efficient" },
            { id: 552455, name: "A New Adventure" },
            { id: 552456, name: "Grey Squadron Y-Wing" },
            { id: 552627, name: " Concord Dawn Interceptors" },
            { id: 553627, name: "Lom Pyke - Dealer in Truths" },
            { id: 553628, name: "Midnight Repairs" },
            { id: 553629, name: "Covert Strength" },
            { id: 553630, name: "Rival's Fall" },
            { id: 553643, name: "The Marauder - Shuttling the Bad Batch" },
            { id: 553644, name: "Rule with Respect" },
            { id: 554316, name: "Qi'ra - I Alone Survived" },
            { id: 554317, name: "Rey - More Than a Scavenger" },
            { id: 554318, name: "Cad Bane - He Who Needs No Introduction" },
            { id: 554319, name: "Synara San - Loyal to Kragan" },
            { id: 554320, name: "Niima Outpost Constables" },
            { id: 554321, name: "Maul - Shadow Collective Visionary" },
            { id: 554322, name: "Adelphi Patrol Wing" },
            { id: 554323, name: "Cobb Vanth - The Marshal" },
            { id: 554324, name: "Choose Sides" },
            { id: 554325, name: "Bounty Hunter's Quarry" },
            { id: 554326, name: "Poe Dameron - Quick to Improvise" },
            { id: 554327, name: "Wroshyr Tree Tender" },
            { id: 554340, name: "Give In to Your Anger" },
            { id: 554341, name: "Stolen Landspeeder" },
            { id: 554342, name: "Migs Mayfield - Triggerman" },
            { id: 554343, name: "Rhokai Gunship" },
            { id: 554344, name: "Krayt Dragon" },
            { id: 554345, name: "Bazine Netal - Spy for the First Order" },
            { id: 554346, name: "Slaver's Freighter" },
            { id: 554352, name: "Xanadu Blood - Cad Bane's Reward" },
            { id: 554353, name: "Dryden Vos - Offering No Escape" },
            { id: 554354, name: "Triple Dark Raid" },
            { id: 554355, name: "Coruscant Dissident" },
            { id: 554356, name: "Qi'ra - Playing Her Part" },
            { id: 554359, name: "Smuggler's Starfighter" },
            { id: 554365, name: "Kragan Gar - Warbird Captain" },
            { id: 554367, name: "Lady Proxima - White Worm Matriarch" },
            { id: 554370, name: "Street Gang Recruiter" }
            ],
            'Event Exclusive Promos': [
            { id: 542169, name: "Darth Vader - Dark Lord of the Sith (Hyperspace)", Normal: 50.54 },
            { id: 542170, name: "Luke Skywalker - Faithful Friend (Hyperspace)", Normal: 48.16 },
            { id: 554304, name: "Grogu - Irresistible" }
            ],
            'Judge Promos': [
            { id: 542167, name: "Takedown (Surge Foil)", Foil: 24.5 },
            { id: 543847, name: "Darth Vader - Dark Lord of the Sith", Foil: 13.81 },
            { id: 543848, name: "Luke Skywalker - Faithful Friend", Foil: 9.63 }
            ],
            'Spark of Rebellion': [
            { id: 540140, name: "Security Complex", Foil: 0.59, Normal: 0.3 },
            { id: 540141, name: "Capital City", Normal: 0.11 },
            { id: 540142, name: "Dagobah Swamp", Normal: 0.09 },
            { id: 540143, name: "Energy Conversion Lab", Normal: 1.89, Foil: 2.65 },
            { id: 540144, name: "Command Center", Normal: 0.1 },
            { id: 540145, name: "Echo Base", Normal: 0.15 },
            { id: 540146, name: "Tarkintown", Normal: 0.35, Foil: 0.74 },
            { id: 540147, name: "Catacombs of Cadera", Normal: 0.12 },
            { id: 540148, name: "Kestro City", Normal: 0.09 },
            { id: 540149, name: "Jedha City", Foil: 0.37, Normal: 0.24 },
            { id: 540150, name: "Administrator's Tower", Normal: 0.1 },
            { id: 540151, name: "Chopper Base", Normal: 0.1 },
            { id: 540152, name: "Inferno Four - Unforgetting", Normal: 0.43, Foil: 0.86 },
            { id: 540153, name: "Scout Bike Pursuer", Foil: 0.26, Normal: 0.11 },
            { id: 540154, name: "Death Trooper", Foil: 0.26, Normal: 0.09 },
            { id: 540155, name: "Del Meeko - Providing Overwatch", Normal: 1.25, Foil: 2.01 },
            { id: 540156, name: "Lieutenant Childsen - Death Star Prison Warden", Foil: 0.35, Normal: 0.16 },
            { id: 540157, name: "Gideon Hask - Ruthless Loyalist", Normal: 2.07, Foil: 2.3 },
            { id: 540158, name: "Academy Defense Walker", Foil: 0.16, Normal: 0.06 },
            { id: 540159, name: "Count Dooku - Darth Tyranus", Normal: 1.89, Foil: 3.83 },
            { id: 540160, name: "AT-AT Suppressor", Foil: 0.2, Normal: 0.16 },
            { id: 540161, name: "Avenger - Hunting Star Destroyer", Normal: 29.02, Foil: 35.71 },
            { id: 540162, name: "Power of the Dark Side", Normal: 0.6, Foil: 1.14 },
            { id: 540163, name: "Search Your Feelings", Foil: 1.73, Normal: 1.31 },
            { id: 540164, name: "Superlaser Blast", Normal: 24.94, Foil: 31.43 },
            { id: 540165, name: "Restored ARC-170", Foil: 0.2, Normal: 0.08 },
            { id: 540166, name: "Yoda - Old Master", Normal: 0.18, Foil: 0.38 },
            { id: 540167, name: "Consular Security Force", Foil: 0.16, Normal: 0.06 },
            { id: 540168, name: "Kanan Jarrus - Revealed Jedi", Normal: 0.36, Foil: 0.63 },
            { id: 540169, name: "Vigilant Honor Guards", Foil: 0.14, Normal: 0.07 },
            { id: 540170, name: "Obi-Wan Kenobi - Following Fate", Foil: 1.76, Normal: 0.86 },
            { id: 540171, name: "The Ghost - Spectre Home Base", Normal: 0.21, Foil: 0.4 },
            { id: 540172, name: "Luke Skywalker - Jedi Knight", Foil: 48.75, Normal: 42.67 },
            { id: 540173, name: "Redemption - Medical Frigate", Normal: 1.27, Foil: 1.93 },
            { id: 540174, name: "Luke's Lightsaber", Normal: 0.63 },
            { id: 540175, name: "Jedi Lightsaber", Normal: 2.89, Foil: 4.04 },
            { id: 540176, name: "The Force is With Me", Foil: 0.37, Normal: 0.19 },
            { id: 540177, name: "Bendu - The One in the Middle", Normal: 0.5, Foil: 0.91 },
            { id: 540178, name: "Protector", Foil: 0.25, Normal: 0.14 },
            { id: 540179, name: "Vigilance", Normal: 40.52, Foil: 44.89 },
            { id: 540180, name: "2-1B Surgical Droid", Normal: 0.06, Foil: 0.23 },
            { id: 540181, name: "Distant Patroller", Foil: 0.22, Normal: 0.14 },
            { id: 540182, name: "Guardian of the Whills", Normal: 0.07, Foil: 0.23 },
            { id: 540183, name: "Regional Governor", Foil: 3.82, Normal: 2.26 },
            { id: 540184, name: "Cloud City Wing Guard", Normal: 0.08, Foil: 0.19 },
            { id: 540185, name: "Wilderness Fighter", Foil: 0.22, Normal: 0.07 },
            { id: 540186, name: "Baze Malbus - Temple Guardian", Normal: 0.19, Foil: 0.21 },
            { id: 540187, name: "System Patrol Craft", Foil: 0.25, Normal: 0.1 },
            { id: 540188, name: "Rugged Survivors", Foil: 0.22, Normal: 0.09 },
            { id: 540189, name: "Cargo Juggernaut", Normal: 0.07, Foil: 0.25 },
            { id: 540190, name: "Resilient", Foil: 0.17, Normal: 0.08 },
            { id: 540191, name: "Devotion", Normal: 0.2, Foil: 0.43 },
            { id: 540192, name: "Electrostaff", Foil: 1.59, Normal: 0.94 },
            { id: 540193, name: "Entrenched", Normal: 0.23, Foil: 0.58 },
            { id: 540194, name: "Moment of Peace", Foil: 0.16, Normal: 0.08 },
            { id: 540195, name: "Repair", Normal: 0.08, Foil: 0.18 },
            { id: 540196, name: "It Binds All Things", Normal: 2.34, Foil: 2.37 },
            { id: 540197, name: "Make An Opening", Foil: 0.24, Normal: 0.13 },
            { id: 540198, name: "Takedown", Normal: 1.24, Foil: 2.22 },
            { id: 540199, name: "Vanquish", Foil: 0.29, Normal: 0.11 },
            { id: 540200, name: "Admiral Piett - Captain of the Executor", Normal: 0.08, Foil: 0.26 },
            { id: 540201, name: "General Tagge - Concerned Commander", Foil: 0.25, Normal: 0.15 },
            { id: 540202, name: "Seasoned Shoretrooper", Normal: 0.13, Foil: 0.32 },
            { id: 540203, name: "Emperor's Royal Guard", Foil: 3.58, Normal: 2.29 },
            { id: 540204, name: "Superlaser Technician", Foil: 0.32, Normal: 0.12 },
            { id: 540205, name: "Grand Moff Tarkin - Death Star Overseer", Normal: 0.84 },
            { id: 540206, name: "Rukh - Thrawn's Assassin", Foil: 2.06, Normal: 1.44 },
            { id: 540207, name: "Gladiator Star Destroyer", Normal: 0.07, Foil: 0.22 },
            { id: 540208, name: "Darth Vader - Commanding the First Legion", Foil: 73.61, Normal: 65.76 },
            { id: 540209, name: "Blizzard Assault AT-AT", Normal: 0.14, Foil: 0.29 },
            { id: 540210, name: "Relentless - Konstantine's Folly", Foil: 1.09, Normal: 0.57 },
            { id: 540211, name: "Devastator - Inescapable", Normal: 14.09, Foil: 13.53 },
            { id: 540212, name: "The Emperor's Legion", Normal: 1.02, Foil: 1.12 },
            { id: 540213, name: "Overwhelming Barrage", Foil: 1.01, Normal: 0.92 },
            { id: 540214, name: "Alliance Dispatcher", Normal: 0.09, Foil: 0.3 },
            { id: 540215, name: "Bail Organa - Rebel Councilor", Foil: 1.06, Normal: 0.65 },
            { id: 540216, name: "Battlefield Marine", Normal: 0.11, Foil: 0.21 },
            { id: 540217, name: "Mon Mothma - Voice of the Rebellion", Foil: 0.29, Normal: 0.21 },
            { id: 540218, name: "Admiral Ackbar - Brilliant Strategist", Normal: 2.92, Foil: 4.12 },
            { id: 540219, name: "Echo Base Defender", Foil: 0.28, Normal: 0.15 },
            { id: 540220, name: "Bright Hope - The Last Transport", Normal: 0.56, Foil: 0.79 },
            { id: 540221, name: "Wedge Antilles - Star of the Rebellion", Foil: 1.82, Normal: 1.02 },
            { id: 540222, name: "Rogue Squadron Skirmisher", Foil: 0.24, Normal: 0.14 },
            { id: 540223, name: "Home One - Alliance Flagship", Normal: 18.56, Foil: 21.99 },
            { id: 540224, name: "Rebel Assault", Foil: 0.77, Normal: 0.58 },
            { id: 540225, name: "U-Wing Reinforcement", Normal: 7.47, Foil: 9.11 },
            { id: 540226, name: "General Krell - Heartless Tactician", Foil: 0.8, Normal: 0.54 },
            { id: 540227, name: "Attack Pattern Delta", Normal: 0.13, Foil: 0.21 },
            { id: 540228, name: "Command", Foil: 18.7, Normal: 18.79 },
            { id: 540229, name: "Vanguard Infantry", Normal: 0.08, Foil: 0.21 },
            { id: 540230, name: "Colonel Yularen - ISB Director", Normal: 0.2, Foil: 0.45 },
            { id: 540231, name: "Frontline Shuttle", Foil: 1.19, Normal: 0.81 },
            { id: 540232, name: "Patrolling V-Wing", Normal: 0.08, Foil: 0.17 },
            { id: 540233, name: "Consortium StarViper", Foil: 0.23, Normal: 0.11 },
            { id: 540234, name: "Homestead Militia", Normal: 0.09, Foil: 0.19 },
            { id: 540235, name: "Escort Skiff", Foil: 0.2, Normal: 0.08 },
            { id: 540236, name: "Agent Kallus - Seeking the Rebels", Normal: 0.78, Foil: 1.03 },
            { id: 540237, name: "Steadfast Battalion", Foil: 0.25, Normal: 0.11 },
            { id: 540238, name: "Mercenary Company", Foil: 0.19, Normal: 0.06 },
            { id: 540239, name: "97th Legion - Keeping the Peace on Sullust", Normal: 0.16, Foil: 0.23 },
            { id: 540240, name: "Reinforcement Walker", Foil: 0.65, Normal: 0.36 },
            { id: 540241, name: "Academy Training", Normal: 0.07, Foil: 0.14 },
            { id: 540242, name: "Hardpoint Heavy Blaster", Foil: 0.26, Normal: 0.13 },
            { id: 540243, name: "Traitorous", Normal: 3.79, Foil: 4.32 },
            { id: 540244, name: "Recruit", Foil: 0.19, Normal: 0.07 },
            { id: 540245, name: "Tactical Advantage", Normal: 0.06, Foil: 0.18 },
            { id: 540246, name: "Prepare for Takeoff", Normal: 0.16, Foil: 0.35 },
            { id: 540247, name: "Resupply", Foil: 0.37, Normal: 0.15 },
            { id: 540248, name: "Strike True", Normal: 0.06, Foil: 0.21 },
            { id: 540249, name: "Death Star Stormtrooper", Foil: 0.23, Normal: 0.08 },
            { id: 540250, name: "Admiral Ozzel - Overconfident", Normal: 0.14, Foil: 0.27 },
            { id: 540251, name: "First Legion Snowtrooper", Foil: 0.21, Normal: 0.09 },
            { id: 540252, name: "Fifth Brother - Fear Hunter", Normal: 0.38, Foil: 0.71 },
            { id: 540253, name: "Imperial Interceptor", Foil: 0.24, Normal: 0.09 },
            { id: 540254, name: "Seventh Sister - Implacable Inquisitor", Foil: 5.07, Normal: 4.58 },
            { id: 540255, name: "Ruthless Raider", Normal: 0.77, Foil: 0.9 },
            { id: 540256, name: "Emperor Palpatine - Master of the Dark Side", Foil: 2.16, Normal: 1.16 },
            { id: 540257, name: "Vader's Lightsaber", Normal: 0.43 },
            { id: 540258, name: "Fallen Lightsaber", Foil: 4.06, Normal: 2.94 },
            { id: 540259, name: "Force Lightning", Normal: 13.58, Foil: 14.24 },
            { id: 540260, name: "Force Choke", Foil: 0.62, Normal: 0.25 },
            { id: 540261, name: "SpecForce Soldier", Normal: 0.1, Foil: 0.28 },
            { id: 540262, name: "Green Squadron A-Wing", Normal: 0.12, Foil: 0.2 },
            { id: 540263, name: "Sabine Wren - Explosives Artist", Foil: 1.41, Normal: 1.09 },
            { id: 540264, name: "Fighters For Freedom", Normal: 0.4, Foil: 0.55 },
            { id: 540265, name: "Red Three - Unstoppable", Foil: 10.27, Normal: 8.49 },
            { id: 540266, name: "K-2SO - Cassian's Counterpart", Normal: 10.19, Foil: 11.32 },
            { id: 540267, name: "Zeb Orrelios - Headstrong Warrior", Foil: 0.41, Normal: 0.2 },
            { id: 540268, name: "Black One - Scourge of Starkiller Base", Normal: 8.77, Foil: 10.79 },
            { id: 540269, name: "Guerilla Attack Pod", Foil: 0.21, Normal: 0.11 },
            { id: 540270, name: "Mace Windu - Party Crasher", Normal: 7.61, Foil: 10.62 },
            { id: 540271, name: "Heroic Sacrifice", Foil: 2.82, Normal: 2.14 },
            { id: 540272, name: "Karabast", Foil: 0.26, Normal: 0.15 },
            { id: 540273, name: "For A Cause I Believe In", Normal: 6.49, Foil: 7.34 },
            { id: 540274, name: "Saw Gerrera - Extremist", Foil: 1.16, Normal: 0.76 },
            { id: 540275, name: "Rallying Cry", Normal: 0.15, Foil: 0.27 },
            { id: 540276, name: "Aggression", Foil: 18.73, Normal: 18.31 },
            { id: 540277, name: "Benthic \"Two Tubes\" - Partisan Lieutenant", Normal: 0.29, Foil: 0.47 },
            { id: 540278, name: "Cantina Braggart", Foil: 0.17, Normal: 0.08 },
            { id: 540279, name: "Jedha Agitator", Normal: 0.07, Foil: 0.17 },
            { id: 540280, name: "Partisan Insurgent", Normal: 0.09, Foil: 0.21 },
            { id: 540281, name: "Wolffe - Suspicious Veteran", Foil: 2.51, Normal: 1.98 },
            { id: 540282, name: "Ardent Sympathizer", Normal: 0.06, Foil: 0.14 },
            { id: 540283, name: "Disabling Fang Fighter", Foil: 0.22, Normal: 0.09 },
            { id: 540284, name: "Star Wing Scout", Normal: 0.16, Foil: 0.25 },
            { id: 540285, name: "Wampa", Foil: 0.21, Normal: 0.04 },
            { id: 540286, name: "Occupier Siege Tank", Normal: 0.07, Foil: 0.2 },
            { id: 540287, name: "Infiltrator's Skill", Foil: 0.21, Normal: 0.07 },
            { id: 540288, name: "Force Throw", Foil: 0.62, Normal: 0.36 },
            { id: 540289, name: "Precision Fire", Normal: 0.08, Foil: 0.29 },
            { id: 540290, name: "Keep Fighting", Foil: 0.21, Normal: 0.09 },
            { id: 540291, name: "Power Failure", Normal: 0.17, Foil: 0.27 },
            { id: 540292, name: "Mission Briefing", Foil: 0.24, Normal: 0.07 },
            { id: 540293, name: "Open Fire", Normal: 0.09, Foil: 0.31 },
            { id: 540294, name: "Bombing Run", Foil: 2.79, Normal: 2.11 },
            { id: 540295, name: "Smoke and Cinders", Normal: 0.4, Foil: 0.54 },
            { id: 540296, name: "Forced Surrender", Normal: 0.15, Foil: 0.3 },
            { id: 540297, name: "ISB Agent", Foil: 0.25, Normal: 0.08 },
            { id: 540298, name: "Bib Fortuna - Jabba's Majordomo", Normal: 0.16, Foil: 0.33 },
            { id: 540299, name: "Cartel Spacer", Foil: 0.55, Normal: 0.22 },
            { id: 540300, name: "Boba Fett - Disintegrator", Normal: 53.11, Foil: 52.96 },
            { id: 540301, name: "Seventh Fleet Defender", Foil: 0.25, Normal: 0.11 },
            { id: 540302, name: "Jabba the Hutt - Cunning Daimyo", Normal: 1.23, Foil: 1.87 },
            { id: 540303, name: "Bossk - Deadly Stalker", Foil: 0.54, Normal: 0.27 },
            { id: 540304, name: "Bounty Hunter Crew", Foil: 0.2, Normal: 0.1 },
            { id: 540305, name: "Fett's Firespray - Pursuing the Bounty", Normal: 5.1, Foil: 5.6 },
            { id: 540306, name: "Chimaera - Flagship of the Seventh Fleet", Foil: 1.36, Normal: 0.87 },
            { id: 540307, name: "No Good to Me Dead", Normal: 0.35, Foil: 0.53 },
            { id: 540308, name: "I Had No Choice", Foil: 0.67, Normal: 0.56 },
            { id: 540309, name: "Chopper - Metal Menace", Normal: 2.36, Foil: 2.85 },
            { id: 540310, name: "Leia Organa - Defiant Princess", Normal: 1.67 },
            { id: 540311, name: "Lothal Insurgent", Normal: 0.1, Foil: 0.18 },
            { id: 540312, name: "Vanguard Ace", Foil: 0.21, Normal: 0.15 },
            { id: 540313, name: "Ezra Bridger - Resourceful Troublemaker", Normal: 0.4, Foil: 0.55 },
            { id: 540314, name: "Millennium Falcon - Piece of Junk", Normal: 38.82, Foil: 40.0 },
            { id: 540315, name: "Rogue Operative", Foil: 0.22, Normal: 0.09 },
            { id: 540316, name: "Auzituck Liberator Gunship", Normal: 0.08, Foil: 0.17 },
            { id: 540317, name: "Chewbacca - Loyal Companion", Foil: 0.4, Normal: 0.15 },
            { id: 540318, name: "Lando Calrissian - Responsible Businessman", Normal: 0.96, Foil: 1.39 },
            { id: 540319, name: "Han Solo - Reluctant Hero", Foil: 1.38, Normal: 0.59 },
            { id: 540320, name: "Bamboozle", Normal: 0.16, Foil: 0.27 },
            { id: 540321, name: "Spark of Rebellion", Foil: 8.82, Normal: 7.44 },
            { id: 540322, name: "Bodhi Rook - Imperial Defector", Foil: 2.05, Normal: 1.92 },
            { id: 540323, name: "Cantina Bouncer", Normal: 0.13, Foil: 0.34 },
            { id: 540324, name: "Cunning", Foil: 33.84, Normal: 34.1 },
            { id: 540325, name: "Greedo - Slow on the Draw", Normal: 0.27, Foil: 0.63 },
            { id: 540326, name: "Jawa Scavenger", Foil: 0.23, Normal: 0.07 },
            { id: 540327, name: "Mining Guild TIE Fighter", Normal: 0.07, Foil: 0.19 },
            { id: 540328, name: "Crafty Smuggler", Foil: 0.2, Normal: 0.1 },
            { id: 540329, name: "Outer Rim Headhunter", Normal: 0.08, Foil: 0.2 },
            { id: 540330, name: "Pirated Starfighter", Normal: 0.15, Foil: 0.31 },
            { id: 540331, name: "Swoop Racer", Foil: 0.2, Normal: 0.06 },
            { id: 540332, name: "Gamorrean Guards", Normal: 0.07, Foil: 0.18 },
            { id: 540333, name: "Strafing Gunship", Foil: 2.95, Normal: 2.52 },
            { id: 540334, name: "Syndicate Lackeys", Normal: 0.09, Foil: 0.22 },
            { id: 540335, name: "Smuggling Compartment", Foil: 0.22, Normal: 0.17 },
            { id: 540336, name: "Snapshot Reflexes", Normal: 0.1, Foil: 0.2 },
            { id: 540337, name: "Disarm", Foil: 0.18, Normal: 0.07 },
            { id: 540338, name: "Shoot First", Foil: 0.38, Normal: 0.27 },
            { id: 540339, name: "Asteroid Sanctuary", Normal: 0.06, Foil: 0.21 },
            { id: 540340, name: "Sneak Attack", Foil: 2.85, Normal: 2.32 },
            { id: 540341, name: "Surprise Strike", Normal: 0.12, Foil: 0.25 },
            { id: 540342, name: "Outmaneuver", Foil: 0.41, Normal: 0.22 },
            { id: 540343, name: "Waylay", Normal: 0.09, Foil: 0.22 },
            { id: 540344, name: "Don't Get Cocky", Foil: 0.8, Normal: 0.52 },
            { id: 540345, name: "Change of Heart", Normal: 14.46, Foil: 14.45 },
            { id: 540346, name: "TIE/ln Fighter", Normal: 0.07, Foil: 0.22 },
            { id: 540347, name: "Admiral Motti - Brazen and Scornful", Normal: 0.95 },
            { id: 540348, name: "Snowtrooper Lieutenant", Normal: 0.1, Foil: 0.2 },
            { id: 540349, name: "Viper Probe Droid", Foil: 0.21, Normal: 0.08 },
            { id: 540350, name: "Cell Block Guard", Normal: 0.08, Foil: 0.25 },
            { id: 540351, name: "General Veers - Blizzard Force Commander", Foil: 0.38, Normal: 0.14 },
            { id: 540352, name: "TIE Advanced", Normal: 0.22, Foil: 0.42 },
            { id: 540353, name: "AT-ST", Foil: 0.24, Normal: 0.06 },
            { id: 540354, name: "I Am Your Father", Normal: 0.84 },
            { id: 540355, name: "Maximum Firepower", Normal: 0.06, Foil: 0.19 },
            { id: 540356, name: "Galactic Ambition", Foil: 0.85, Normal: 0.49 },
            { id: 540357, name: "R2-D2 - Ignoring Protocol", Normal: 1.87 },
            { id: 540358, name: "Alliance X-Wing", Foil: 0.26, Normal: 0.08 },
            { id: 540359, name: "C-3PO - Protocol Droid", Normal: 0.78 },
            { id: 540360, name: "Rebel Pathfinder", Foil: 0.18, Normal: 0.1 },
            { id: 540361, name: "Fleet Lieutenant", Normal: 0.1, Foil: 0.27 },
            { id: 540362, name: "Wing Leader", Foil: 1.81, Normal: 1.09 },
            { id: 540363, name: "General Dodonna - Massassi Group Commander", Normal: 0.18, Foil: 0.27 },
            { id: 540364, name: "Regional Sympathizers", Normal: 0.07, Foil: 0.19 },
            { id: 540365, name: "Snowspeeder", Foil: 0.17, Normal: 0.07 },
            { id: 540366, name: "Medal Ceremony", Normal: 0.1, Foil: 0.23 },
            { id: 540367, name: "You're My Only Hope", Foil: 1.39, Normal: 1.07 },
            { id: 540368, name: "Underworld Thug", Normal: 0.05, Foil: 0.12 },
            { id: 540369, name: "Volunteer Soldier", Foil: 0.14, Normal: 0.06 },
            { id: 540370, name: "Frontier AT-RT", Normal: 0.05, Foil: 0.15 },
            { id: 540371, name: "Corellian Freighter", Foil: 0.15, Normal: 0.08 },
            { id: 540372, name: "Confiscate", Foil: 0.17, Normal: 0.06 },
            { id: 540373, name: "Restock", Normal: 0.07, Foil: 0.19 },
            { id: 540374, name: "Experience", Normal: 0.61 },
            { id: 540375, name: "Shield", Normal: 0.98 },
            { id: 540376, name: "Director Krennic - Aspiring to Authority", Normal: 0.09 },
            { id: 540377, name: "Iden Versio - Inferno Squad Commander", Normal: 0.24 },
            { id: 540378, name: "Chewbacca - Walking Carpet", Normal: 0.07 },
            { id: 540379, name: "Chirrut Imwe - One With The Force", Normal: 0.17 },
            { id: 540380, name: "Luke Skywalker - Faithful Friend", Normal: 1.13 },
            { id: 540381, name: "Emperor Palpatine - Galactic Ruler", Normal: 0.22 },
            { id: 540382, name: "Grand Moff Tarkin - Oversector Governor", Normal: 0.08 },
            { id: 540383, name: "Hera Syndulla - Spectre Two", Normal: 0.24 },
            { id: 540384, name: "Leia Organa - Alliance General", Normal: 0.06 },
            { id: 540385, name: "Darth Vader - Dark Lord of the Sith", Normal: 1.4 },
            { id: 540386, name: "Grand Inquisitor - Hunting the Jedi", Normal: 0.21 },
            { id: 540387, name: "IG-88 - Ruthless Bounty Hunter", Normal: 0.07 },
            { id: 540388, name: "Cassian Andor - Dedicated to the Rebellion", Normal: 0.21 },
            { id: 540389, name: "Sabine Wren - Galvanized Revolutionary", Normal: 0.07 },
            { id: 540390, name: "Boba Fett - Collecting the Bounty", Normal: 0.07 },
            { id: 540391, name: "Grand Admiral Thrawn - Patient and Insightful", Normal: 0.23 },
            { id: 540392, name: "Han Solo - Audacious Smuggler", Normal: 0.21 },
            { id: 540393, name: "Jyn Erso - Resisting Oppression", Normal: 0.05 },
            { id: 540407, name: "Security Complex (Hyperspace)", Normal: 7.44, Foil: 24.75 },
            { id: 540408, name: "Capital City (Hyperspace)", Normal: 0.64 },
            { id: 540409, name: "Dagobah Swamp (Hyperspace)", Normal: 0.69 },
            { id: 540410, name: "Energy Conversion Lab (Hyperspace)", Foil: 57.75, Normal: 15.08 },
            { id: 540411, name: "Command Center (Hyperspace)", Normal: 0.55 },
            { id: 540412, name: "Echo Base (Hyperspace)", Normal: 0.8 },
            { id: 540413, name: "Tarkintown (Hyperspace)", Normal: 11.5, Foil: 39.79 },
            { id: 540414, name: "Catacombs of Cadera (Hyperspace)", Normal: 0.87 },
            { id: 540415, name: "Kestro City (Hyperspace)", Normal: 0.68 },
            { id: 540416, name: "Jedha City (Hyperspace)", Normal: 5.14, Foil: 16.92 },
            { id: 540417, name: "Administrator's Tower (Hyperspace)", Normal: 1.17 },
            { id: 540418, name: "Chopper Base (Hyperspace)", Normal: 0.76 },
            { id: 540419, name: "Inferno Four - Unforgetting (Hyperspace)", Foil: 11.49, Normal: 5.82 },
            { id: 540420, name: "Scout Bike Pursuer (Hyperspace)", Normal: 0.68, Foil: 2.27 },
            { id: 540421, name: "Death Trooper (Hyperspace)", Foil: 3.23, Normal: 1.1 },
            { id: 540422, name: "Del Meeko - Providing Overwatch (Hyperspace)", Foil: 14.58, Normal: 5.45 },
            { id: 540423, name: "Lieutenant Childsen - Death Star Prison Warden (Hyperspace)", Normal: 4.43, Foil: 16.03 },
            { id: 540424, name: "Gideon Hask - Ruthless Loyalist (Hyperspace)", Foil: 33.6, Normal: 14.3 },
            { id: 540425, name: "Academy Defense Walker (Hyperspace)", Normal: 0.27, Foil: 0.96 },
            { id: 540426, name: "Count Dooku - Darth Tyranus (Hyperspace)", Foil: 20.31, Normal: 6.95 },
            { id: 540427, name: "AT-AT Suppressor (Hyperspace)", Normal: 0.93, Foil: 1.64 },
            { id: 540428, name: "Avenger - Hunting Star Destroyer (Hyperspace)", Foil: 69.17, Normal: 43.59 },
            { id: 540429, name: "Power of the Dark Side (Hyperspace)", Normal: 7.11, Foil: 17.52 },
            { id: 540430, name: "Search Your Feelings (Hyperspace)", Normal: 6.28, Foil: 21.47 },
            { id: 540431, name: "Superlaser Blast (Hyperspace)", Foil: 64.05, Normal: 37.16 },
            { id: 540432, name: "Restored ARC-170 (Hyperspace)", Normal: 0.98, Foil: 2.55 },
            { id: 540433, name: "Yoda - Old Master (Hyperspace)", Foil: 6.7, Normal: 1.64 },
            { id: 540434, name: "Consular Security Force (Hyperspace)", Normal: 0.28, Foil: 0.88 },
            { id: 540435, name: "Kanan Jarrus - Revealed Jedi (Hyperspace)", Foil: 14.8, Normal: 4.53 },
            { id: 540436, name: "Vigilant Honor Guards (Hyperspace)", Normal: 0.31, Foil: 0.67 },
            { id: 540437, name: "Obi-Wan Kenobi - Following Fate (Hyperspace)", Foil: 38.97, Normal: 17.06 },
            { id: 540438, name: "The Ghost - Spectre Home Base (Hyperspace)", Foil: 5.81, Normal: 2.63 },
            { id: 540439, name: "Luke Skywalker - Jedi Knight (Hyperspace)", Normal: 62.29, Foil: 166.46 },
            { id: 540440, name: "Redemption - Medical Frigate (Hyperspace)", Foil: 16.72, Normal: 8.67 },
            { id: 540441, name: "Jedi Lightsaber (Hyperspace)", Normal: 8.83, Foil: 26.94 },
            { id: 540442, name: "The Force is With Me (Hyperspace)", Foil: 7.55, Normal: 2.04 },
            { id: 540443, name: "Bendu - The One in the Middle (Hyperspace)", Normal: 3.04, Foil: 9.2 },
            { id: 540444, name: "Protector (Hyperspace)", Foil: 1.72, Normal: 0.79 },
            { id: 540445, name: "Vigilance (Hyperspace)", Normal: 54.4, Foil: 84.51 },
            { id: 540446, name: "2-1B Surgical Droid (Hyperspace)", Normal: 0.25, Foil: 0.95 },
            { id: 540447, name: "Distant Patroller (Hyperspace)", Foil: 1.64, Normal: 0.95 },
            { id: 540448, name: "Guardian of the Whills (Hyperspace)", Normal: 0.37, Foil: 1.39 },
            { id: 540449, name: "Regional Governor (Hyperspace)", Foil: 21.51, Normal: 7.78 },
            { id: 540450, name: "Cloud City Wing Guard (Hyperspace)", Normal: 0.29, Foil: 1.14 },
            { id: 540451, name: "Wilderness Fighter (Hyperspace)", Foil: 0.91, Normal: 0.37 },
            { id: 540452, name: "Baze Malbus - Temple Guardian (Hyperspace)", Normal: 1.17, Foil: 3.8 },
            { id: 540453, name: "System Patrol Craft (Hyperspace)", Foil: 2.28, Normal: 1.09 },
            { id: 540454, name: "Rugged Survivors (Hyperspace)", Normal: 0.26, Foil: 0.88 },
            { id: 540455, name: "Cargo Juggernaut (Hyperspace)", Foil: 1.69, Normal: 0.61 },
            { id: 540456, name: "Resilient (Hyperspace)", Foil: 0.83, Normal: 0.32 },
            { id: 540457, name: "Devotion (Hyperspace)", Foil: 5.96 },
            { id: 540458, name: "Electrostaff (Hyperspace)", Foil: 12.77, Normal: 5.56 },
            { id: 540459, name: "Entrenched (Hyperspace)", Normal: 3.54, Foil: 11.07 },
            { id: 540460, name: "Moment of Peace (Hyperspace)", Foil: 0.92, Normal: 0.29 },
            { id: 540461, name: "Repair (Hyperspace)", Normal: 0.52, Foil: 1.61 },
            { id: 540462, name: "It Binds All Things (Hyperspace)", Foil: 14.46, Normal: 7.39 },
            { id: 540463, name: "Make An Opening (Hyperspace)", Normal: 0.9, Foil: 3.02 },
            { id: 540464, name: "Takedown (Hyperspace)", Normal: 4.82, Foil: 14.4 },
            { id: 540465, name: "Vanquish (Hyperspace)", Foil: 5.07, Normal: 1.8 },
            { id: 540466, name: "Admiral Piett - Captain of the Executor (Hyperspace)", Normal: 1.26, Foil: 3.33 },
            { id: 540467, name: "General Tagge - Concerned Commander (Hyperspace)", Foil: 2.52, Normal: 1.22 },
            { id: 540468, name: "Seasoned Shoretrooper (Hyperspace)", Normal: 1.23, Foil: 4.01 },
            { id: 540469, name: "Emperor's Royal Guard (Hyperspace)", Foil: 24.35, Normal: 12.55 },
            { id: 540470, name: "Superlaser Technician (Hyperspace)", Normal: 3.17, Foil: 10.79 },
            { id: 540471, name: "Rukh - Thrawn's Assassin (Hyperspace)", Foil: 11.85, Normal: 5.78 },
            { id: 540472, name: "Gladiator Star Destroyer (Hyperspace)", Foil: 0.81, Normal: 0.25 },
            { id: 540473, name: "Darth Vader - Commanding the First Legion (Hyperspace)", Normal: 116.66, Foil: 302.33 },
            { id: 540474, name: "Blizzard Assault AT-AT (Hyperspace)", Foil: 2.3, Normal: 0.84 },
            { id: 540475, name: "Relentless - Konstantine's Folly (Hyperspace)", Normal: 7.77, Foil: 22.16 },
            { id: 540476, name: "Devastator - Inescapable (Hyperspace)", Foil: 56.33, Normal: 18.62 },
            { id: 540477, name: "The Emperor's Legion (Hyperspace)", Normal: 3.45, Foil: 12.4 },
            { id: 540478, name: "Overwhelming Barrage (Hyperspace)", Foil: 22.39, Normal: 10.1 },
            { id: 540479, name: "Alliance Dispatcher (Hyperspace)", Normal: 0.61, Foil: 1.64 },
            { id: 540480, name: "Bail Organa - Rebel Councilor (Hyperspace)", Normal: 3.12, Foil: 8.24 },
            { id: 540481, name: "Battlefield Marine (Hyperspace)", Foil: 5.44, Normal: 1.07 },
            { id: 540482, name: "Mon Mothma - Voice of the Rebellion (Hyperspace)", Normal: 2.69, Foil: 4.73 },
            { id: 540483, name: "Admiral Ackbar - Brilliant Strategist (Hyperspace)", Foil: 24.44, Normal: 12.69 },
            { id: 540484, name: "Echo Base Defender (Hyperspace)", Normal: 2.38, Foil: 4.93 },
            { id: 540485, name: "Bright Hope - The Last Transport (Hyperspace)", Foil: 10.56, Normal: 6.07 },
            { id: 540486, name: "Wedge Antilles - Star of the Rebellion (Hyperspace)", Normal: 4.87, Foil: 11.2 },
            { id: 540487, name: "Rogue Squadron Skirmisher (Hyperspace)", Foil: 3.92, Normal: 1.63 },
            { id: 540488, name: "Home One - Alliance Flagship (Hyperspace)", Foil: 51.05, Normal: 27.31 },
            { id: 540489, name: "Rebel Assault (Hyperspace)", Normal: 4.86, Foil: 7.73 },
            { id: 540490, name: "U-Wing Reinforcement (Hyperspace)", Foil: 39.71, Normal: 19.37 },
            { id: 540491, name: "General Krell - Heartless Tactician (Hyperspace)", Normal: 2.84, Foil: 11.48 },
            { id: 540492, name: "Attack Pattern Delta (Hyperspace)", Foil: 3.32, Normal: 1.2 },
            { id: 540493, name: "Command (Hyperspace)", Normal: 26.25, Foil: 44.36 },
            { id: 540494, name: "Vanguard Infantry (Hyperspace)", Foil: 0.78, Normal: 0.33 },
            { id: 540495, name: "Colonel Yularen - ISB Director (Hyperspace)", Normal: 2.62, Foil: 6.97 },
            { id: 540496, name: "Frontline Shuttle (Hyperspace)", Normal: 3.35, Foil: 14.85 },
            { id: 540497, name: "Patrolling V-Wing (Hyperspace)", Foil: 1.42, Normal: 0.37 },
            { id: 540498, name: "Consortium StarViper (Hyperspace)", Normal: 1.49, Foil: 2.66 },
            { id: 540499, name: "Homestead Militia (Hyperspace)", Foil: 0.78, Normal: 0.34 },
            { id: 540500, name: "Escort Skiff (Hyperspace)", Normal: 0.45, Foil: 1.07 },
            { id: 540501, name: "Agent Kallus - Seeking the Rebels (Hyperspace)", Foil: 9.51, Normal: 3.19 },
            { id: 540502, name: "Steadfast Battalion (Hyperspace)", Normal: 1.37, Foil: 2.81 },
            { id: 540503, name: "Mercenary Company (Hyperspace)", Foil: 0.5, Normal: 0.31 },
            { id: 540504, name: "97th Legion - Keeping the Peace on Sullust (Hyperspace)", Normal: 1.02, Foil: 2.24 },
            { id: 540505, name: "Reinforcement Walker (Hyperspace)", Foil: 12.71, Normal: 6.3 },
            { id: 540506, name: "Academy Training (Hyperspace)", Foil: 1.09, Normal: 0.3 },
            { id: 540507, name: "Hardpoint Heavy Blaster (Hyperspace)", Normal: 0.8, Foil: 2.29 },
            { id: 540508, name: "Traitorous (Hyperspace)", Foil: 37.29, Normal: 10.78 },
            { id: 540509, name: "Recruit (Hyperspace)", Normal: 0.38, Foil: 1.1 },
            { id: 540510, name: "Tactical Advantage (Hyperspace)", Foil: 0.57, Normal: 0.25 },
            { id: 540511, name: "Prepare for Takeoff (Hyperspace)", Normal: 0.94, Foil: 1.92 },
            { id: 540512, name: "Resupply (Hyperspace)", Foil: 4.01, Normal: 1.8 },
            { id: 540513, name: "Strike True (Hyperspace)", Normal: 0.69, Foil: 1.63 },
            { id: 540514, name: "Death Star Stormtrooper (Hyperspace)", Normal: 0.66, Foil: 1.76 },
            { id: 540515, name: "Admiral Ozzel - Overconfident (Hyperspace)", Foil: 2.48, Normal: 1.24 },
            { id: 540516, name: "First Legion Snowtrooper (Hyperspace)", Normal: 0.6, Foil: 2.21 },
            { id: 540517, name: "Fifth Brother - Fear Hunter (Hyperspace)", Foil: 11.98, Normal: 3.9 },
            { id: 540518, name: "Imperial Interceptor (Hyperspace)", Normal: 1.31, Foil: 4.21 },
            { id: 540519, name: "Seventh Sister - Implacable Inquisitor (Hyperspace)", Foil: 26.83, Normal: 13.51 },
            { id: 540520, name: "Ruthless Raider (Hyperspace)", Normal: 3.09, Foil: 9.78 },
            { id: 540521, name: "Emperor Palpatine - Master of the Dark Side (Hyperspace)", Foil: 65.23, Normal: 16.12 },
            { id: 540522, name: "Fallen Lightsaber (Hyperspace)", Foil: 30.41, Normal: 9.06 },
            { id: 540523, name: "Force Lightning (Hyperspace)", Normal: 22.89, Foil: 56.0 },
            { id: 540524, name: "Force Choke (Hyperspace)", Foil: 15.85, Normal: 4.06 },
            { id: 540525, name: "SpecForce Soldier (Hyperspace)", Normal: 0.87, Foil: 2.29 },
            { id: 540526, name: "Green Squadron A-Wing (Hyperspace)", Foil: 2.03, Normal: 0.95 },
            { id: 540527, name: "Sabine Wren - Explosives Artist (Hyperspace)", Normal: 3.81, Foil: 8.63 },
            { id: 540528, name: "Fighters For Freedom (Hyperspace)", Foil: 7.26, Normal: 2.9 },
            { id: 540529, name: "Red Three - Unstoppable (Hyperspace)", Normal: 29.8, Foil: 39.9 },
            { id: 540530, name: "K-2SO - Cassian's Counterpart (Hyperspace)", Normal: 23.27, Foil: 39.08 },
            { id: 540531, name: "Zeb Orrelios - Headstrong Warrior (Hyperspace)", Foil: 4.53, Normal: 1.87 },
            { id: 540532, name: "Black One - Scourge of Starkiller Base (Hyperspace)", Normal: 16.4, Foil: 38.03 },
            { id: 540533, name: "Guerilla Attack Pod (Hyperspace)", Foil: 2.07, Normal: 0.68 },
            { id: 540534, name: "Mace Windu - Party Crasher (Hyperspace)", Normal: 14.32, Foil: 37.9 },
            { id: 540535, name: "Heroic Sacrifice (Hyperspace)", Foil: 12.97, Normal: 8.36 },
            { id: 540536, name: "Karabast (Hyperspace)", Normal: 0.72, Foil: 1.34 },
            { id: 540537, name: "For A Cause I Believe In (Hyperspace)", Foil: 32.22, Normal: 14.77 },
            { id: 540538, name: "Saw Gerrera - Extremist (Hyperspace)", Foil: 11.26, Normal: 3.48 },
            { id: 540539, name: "Rallying Cry (Hyperspace)", Normal: 1.11, Foil: 4.97 },
            { id: 540540, name: "Aggression (Hyperspace)", Foil: 62.51, Normal: 26.68 },
            { id: 540541, name: "Benthic \"Two Tubes\" - Partisan Lieutenant (Hyperspace)", Normal: 1.79, Foil: 4.17 },
            { id: 540542, name: "Cantina Braggart (Hyperspace)", Foil: 0.62, Normal: 0.23 },
            { id: 540543, name: "Jedha Agitator (Hyperspace)", Normal: 0.25, Foil: 0.7 },
            { id: 540544, name: "Partisan Insurgent (Hyperspace)", Foil: 0.85, Normal: 0.35 },
            { id: 540545, name: "Wolffe - Suspicious Veteran (Hyperspace)", Normal: 6.74, Foil: 12.07 },
            { id: 540546, name: "Ardent Sympathizer (Hyperspace)", Foil: 0.78, Normal: 0.24 },
            { id: 540547, name: "Disabling Fang Fighter (Hyperspace)", Normal: 0.92, Foil: 1.85 },
            { id: 540548, name: "Star Wing Scout (Hyperspace)", Normal: 0.67, Foil: 1.95 },
            { id: 540549, name: "Wampa (Hyperspace)", Foil: 0.87, Normal: 0.24 },
            { id: 540550, name: "Occupier Siege Tank (Hyperspace)", Normal: 0.26, Foil: 0.67 },
            { id: 540551, name: "Infiltrator's Skill (Hyperspace)", Foil: 1.06, Normal: 0.44 },
            { id: 540552, name: "Force Throw (Hyperspace)", Normal: 3.72, Foil: 13.17 },
            { id: 540553, name: "Precision Fire (Hyperspace)", Foil: 0.94, Normal: 0.35 },
            { id: 540554, name: "Keep Fighting (Hyperspace)", Normal: 0.5, Foil: 1.27 },
            { id: 540555, name: "Power Failure (Hyperspace)", Foil: 2.23, Normal: 0.57 },
            { id: 540556, name: "Mission Briefing (Hyperspace)", Foil: 0.58, Normal: 0.26 },
            { id: 540557, name: "Open Fire (Hyperspace)", Normal: 1.64, Foil: 4.73 },
            { id: 540558, name: "Bombing Run (Hyperspace)", Foil: 22.8, Normal: 7.08 },
            { id: 540559, name: "Smoke and Cinders (Hyperspace)", Normal: 1.98, Foil: 4.92 },
            { id: 540560, name: "Forced Surrender (Hyperspace)", Foil: 2.23, Normal: 1.19 },
            { id: 540561, name: "ISB Agent (Hyperspace)", Normal: 0.36, Foil: 1.09 },
            { id: 540562, name: "Bib Fortuna - Jabba's Majordomo (Hyperspace)", Foil: 3.45, Normal: 1.07 },
            { id: 540563, name: "Cartel Spacer (Hyperspace)", Normal: 3.99, Foil: 6.99 },
            { id: 540564, name: "Boba Fett - Disintegrator (Hyperspace)", Normal: 70.75, Foil: 200.93 },
            { id: 540565, name: "Seventh Fleet Defender (Hyperspace)", Foil: 3.54, Normal: 1.46 },
            { id: 540566, name: "Jabba the Hutt - Cunning Daimyo (Hyperspace)", Normal: 13.26, Foil: 25.86 },
            { id: 540567, name: "Bossk - Deadly Stalker (Hyperspace)", Foil: 6.44, Normal: 2.63 },
            { id: 540568, name: "Bounty Hunter Crew (Hyperspace)", Normal: 0.5, Foil: 1.79 },
            { id: 540569, name: "Fett's Firespray - Pursuing the Bounty (Hyperspace)", Foil: 54.74, Normal: 25.46 },
            { id: 540570, name: "Chimaera - Flagship of the Seventh Fleet (Hyperspace)", Normal: 5.44, Foil: 12.49 },
            { id: 540571, name: "No Good to Me Dead (Hyperspace)", Foil: 11.78, Normal: 4.8 },
            { id: 540572, name: "I Had No Choice (Hyperspace)", Foil: 11.97, Normal: 2.02 },
            { id: 540573, name: "Chopper - Metal Menace (Hyperspace)", Normal: 8.0, Foil: 19.95 },
            { id: 540574, name: "Lothal Insurgent (Hyperspace)", Foil: 0.85, Normal: 0.39 },
            { id: 540575, name: "Vanguard Ace (Hyperspace)", Normal: 1.38, Foil: 3.59 },
            { id: 540576, name: "Ezra Bridger - Resourceful Troublemaker (Hyperspace)", Foil: 7.93, Normal: 2.93 },
            { id: 540577, name: "Millennium Falcon - Piece of Junk (Hyperspace)", Normal: 48.56, Foil: 89.72 },
            { id: 540578, name: "Rogue Operative (Hyperspace)", Foil: 0.87, Normal: 0.53 },
            { id: 540579, name: "Auzituck Liberator Gunship (Hyperspace)", Normal: 0.46, Foil: 0.95 },
            { id: 540580, name: "Chewbacca - Loyal Companion (Hyperspace)", Normal: 1.67, Foil: 6.36 },
            { id: 540581, name: "Lando Calrissian - Responsible Businessman (Hyperspace)", Foil: 20.22, Normal: 5.38 },
            { id: 540582, name: "Han Solo - Reluctant Hero (Hyperspace)", Normal: 12.84, Foil: 36.85 },
            { id: 540583, name: "Bamboozle (Hyperspace)", Foil: 2.91, Normal: 1.05 },
            { id: 540584, name: "Spark of Rebellion (Hyperspace)", Normal: 23.85, Foil: 39.3 },
            { id: 540585, name: "Bodhi Rook - Imperial Defector (Hyperspace)", Foil: 20.81, Normal: 18.34 },
            { id: 540586, name: "Cantina Bouncer (Hyperspace)", Normal: 3.23, Foil: 4.87 },
            { id: 540587, name: "Cunning (Hyperspace)", Foil: 69.34, Normal: 42.11 },
            { id: 540588, name: "Greedo - Slow on the Draw (Hyperspace)", Foil: 6.79, Normal: 3.44 },
            { id: 540589, name: "Jawa Scavenger (Hyperspace)", Normal: 0.34, Foil: 1.03 },
            { id: 540590, name: "Mining Guild TIE Fighter (Hyperspace)", Foil: 1.2, Normal: 0.44 },
            { id: 540591, name: "Crafty Smuggler (Hyperspace)", Normal: 1.23, Foil: 2.41 },
            { id: 540592, name: "Outer Rim Headhunter (Hyperspace)", Foil: 1.16, Normal: 0.39 },
            { id: 540593, name: "Pirated Starfighter (Hyperspace)", Normal: 1.09, Foil: 2.25 },
            { id: 540594, name: "Swoop Racer (Hyperspace)", Foil: 0.67, Normal: 0.35 },
            { id: 540595, name: "Gamorrean Guards (Hyperspace)", Normal: 0.46, Foil: 1.09 },
            { id: 540596, name: "Strafing Gunship (Hyperspace)", Foil: 18.78, Normal: 8.89 },
            { id: 540597, name: "Syndicate Lackeys (Hyperspace)", Normal: 0.5, Foil: 1.09 },
            { id: 540598, name: "Smuggling Compartment (Hyperspace)", Normal: 0.61, Foil: 3.57 },
            { id: 540599, name: "Snapshot Reflexes (Hyperspace)", Foil: 3.09, Normal: 0.63 },
            { id: 540600, name: "Disarm (Hyperspace)", Normal: 0.24, Foil: 0.9 },
            { id: 540601, name: "Shoot First (Hyperspace)", Foil: 9.32, Normal: 6.67 },
            { id: 540602, name: "Asteroid Sanctuary (Hyperspace)", Normal: 0.62, Foil: 1.11 },
            { id: 540603, name: "Sneak Attack (Hyperspace)", Foil: 18.81, Normal: 9.17 },
            { id: 540604, name: "Surprise Strike (Hyperspace)", Normal: 2.13, Foil: 3.58 },
            { id: 540605, name: "Outmaneuver (Hyperspace)", Foil: 5.28, Normal: 1.92 },
            { id: 540606, name: "Waylay (Hyperspace)", Foil: 4.34, Normal: 1.19 },
            { id: 540607, name: "Don't Get Cocky (Hyperspace)", Normal: 2.15, Foil: 8.7 },
            { id: 540608, name: "Change of Heart (Hyperspace)", Foil: 30.21, Normal: 18.61 },
            { id: 540609, name: "TIE/ln Fighter (Hyperspace)", Normal: 1.06, Foil: 2.45 },
            { id: 540610, name: "Snowtrooper Lieutenant (Hyperspace)", Foil: 3.31, Normal: 1.31 },
            { id: 540611, name: "Viper Probe Droid (Hyperspace)", Normal: 1.98, Foil: 5.62 },
            { id: 540612, name: "Cell Block Guard (Hyperspace)", Foil: 4.52, Normal: 1.11 },
            { id: 540614, name: "TIE Advanced (Hyperspace)", Normal: 2.03, Foil: 4.49 },
            { id: 540615, name: "AT-ST (Hyperspace)", Foil: 1.05, Normal: 0.42 },
            { id: 540616, name: "Maximum Firepower (Hyperspace)", Normal: 0.46, Foil: 1.44 },
            { id: 540617, name: "Galactic Ambition (Hyperspace)", Foil: 14.5, Normal: 4.0 },
            { id: 540618, name: "Alliance X-Wing (Hyperspace)", Normal: 1.03, Foil: 2.5 },
            { id: 540619, name: "Rebel Pathfinder (Hyperspace)", Foil: 1.24, Normal: 0.48 },
            { id: 540620, name: "Fleet Lieutenant (Hyperspace)", Normal: 2.49, Foil: 4.44 },
            { id: 540621, name: "Wing Leader (Hyperspace)", Foil: 25.83, Normal: 9.84 },
            { id: 540622, name: "General Dodonna - Massassi Group Commander (Hyperspace)", Foil: 2.71, Normal: 1.11 },
            { id: 540623, name: "Regional Sympathizers (Hyperspace)", Normal: 0.26, Foil: 0.75 },
            { id: 540624, name: "Snowspeeder (Hyperspace)", Foil: 1.26, Normal: 0.35 },
            { id: 540625, name: "Medal Ceremony (Hyperspace)", Normal: 1.15, Foil: 1.72 },
            { id: 540626, name: "You're My Only Hope (Hyperspace)", Foil: 19.13, Normal: 4.5 },
            { id: 540627, name: "Underworld Thug (Hyperspace)", Normal: 0.23, Foil: 0.56 },
            { id: 540628, name: "Volunteer Soldier (Hyperspace)", Foil: 0.48, Normal: 0.24 },
            { id: 540629, name: "Frontier AT-RT (Hyperspace)", Normal: 0.28, Foil: 0.7 },
            { id: 540630, name: "Corellian Freighter (Hyperspace)", Normal: 0.31, Foil: 0.86 },
            { id: 540631, name: "Confiscate (Hyperspace)", Foil: 1.12, Normal: 0.33 },
            { id: 540632, name: "Restock (Hyperspace)", Normal: 0.52, Foil: 2.38 },
            { id: 540633, name: "Experience (Hyperspace)", Normal: 1.95 },
            { id: 540634, name: "Shield (Hyperspace)", Normal: 1.67 },
            { id: 540635, name: "Director Krennic - Aspiring to Authority (Hyperspace)", Normal: 0.17 },
            { id: 540636, name: "Iden Versio - Inferno Squad Commander (Hyperspace)", Normal: 2.17 },
            { id: 540637, name: "Chewbacca - Walking Carpet (Hyperspace)", Normal: 0.15 },
            { id: 540638, name: "Chirrut Imwe - One With The Force (Hyperspace)", Normal: 0.95 },
            { id: 540639, name: "Emperor Palpatine - Galactic Ruler (Hyperspace)", Normal: 2.14 },
            { id: 540640, name: "Grand Moff Tarkin - Oversector Governor (Hyperspace)", Normal: 0.21 },
            { id: 540641, name: "Hera Syndulla - Spectre Two (Hyperspace)", Normal: 1.72 },
            { id: 540642, name: "Leia Organa - Alliance General (Hyperspace)", Normal: 0.19 },
            { id: 540643, name: "Grand Inquisitor - Hunting the Jedi (Hyperspace)", Normal: 1.68 },
            { id: 540644, name: "IG-88 - Ruthless Bounty Hunter (Hyperspace)", Normal: 0.18 },
            { id: 540645, name: "Cassian Andor - Dedicated to the Rebellion (Hyperspace)", Normal: 1.12 },
            { id: 540646, name: "Sabine Wren - Galvanized Revolutionary (Hyperspace)", Normal: 0.21 },
            { id: 540647, name: "Boba Fett - Collecting the Bounty (Hyperspace)", Normal: 0.21 },
            { id: 540648, name: "Grand Admiral Thrawn - Patient and Insightful (Hyperspace)", Normal: 2.86 },
            { id: 540649, name: "Han Solo - Audacious Smuggler (Hyperspace)", Normal: 1.1 },
            { id: 540650, name: "Jyn Erso - Resisting Oppression (Hyperspace)", Normal: 0.16 },
            { id: 540672, name: "Director Krennic - Aspiring to Authority (Showcase)", Foil: 354.42 },
            { id: 540673, name: "Iden Versio - Inferno Squad Commander (Showcase)", Foil: 355.39 },
            { id: 540674, name: "Chewbacca - Walking Carpet (Showcase)", Foil: 367.75 },
            { id: 540675, name: "Chirrut Imwe - One With The Force (Showcase)", Foil: 259.45 },
            { id: 540676, name: "Emperor Palpatine - Galactic Ruler (Showcase)", Foil: 534.62 },
            { id: 540677, name: "Grand Moff Tarkin - Oversector Governor (Showcase)", Foil: 328.52 },
            { id: 540678, name: "Hera Syndulla - Spectre Two (Showcase)", Foil: 313.34 },
            { id: 540679, name: "Leia Organa - Alliance General (Showcase)", Foil: 621.13 },
            { id: 540680, name: "Grand Inquisitor - Hunting the Jedi (Showcase)", Foil: 295.19 },
            { id: 540681, name: "IG-88 - Ruthless Bounty Hunter (Showcase)", Foil: 197.3 },
            { id: 540682, name: "Cassian Andor - Dedicated to the Rebellion (Showcase)", Foil: 250.72 },
            { id: 540683, name: "Sabine Wren - Galvanized Revolutionary (Showcase)", Foil: 409.09 },
            { id: 540684, name: "Boba Fett - Collecting the Bounty (Showcase)", Foil: 813.17 },
            { id: 540685, name: "Grand Admiral Thrawn - Patient and Insightful (Showcase)", Foil: 310.87 },
            { id: 540686, name: "Han Solo - Audacious Smuggler (Showcase)", Foil: 498.21 },
            { id: 540687, name: "Jyn Erso - Resisting Oppression (Showcase)", Foil: 194.83 },
            { id: 542201, name: "Administrator's Tower // Shield", Normal: 0.05 },
            { id: 542202, name: "Administrator's Tower // Experience", Normal: 0.08 },
            { id: 542203, name: "Administrator's Tower // Shield (Hyperspace)", Normal: 0.16 },
            { id: 542204, name: "Administrator's Tower // Experience (Hyperspace)", Normal: 0.12 },
            { id: 542205, name: "Capital City // Shield", Normal: 0.06 },
            { id: 542206, name: "Capital City // Experience", Normal: 0.07 },
            { id: 542207, name: "Capital City // Shield (Hyperspace)", Normal: 0.16 },
            { id: 542208, name: "Capital City // Experience (Hyperspace)", Normal: 0.14 },
            { id: 542209, name: "Catacombs of Cadera // Shield", Normal: 0.07 },
            { id: 542210, name: "Catacombs of Cadera // Experience", Normal: 0.07 },
            { id: 542211, name: "Catacombs of Cadera // Shield (Hyperspace)", Normal: 0.19 },
            { id: 542212, name: "Catacombs of Cadera // Experience (Hyperspace)", Normal: 0.15 },
            { id: 542213, name: "Chopper Base // Shield", Normal: 0.05 },
            { id: 542214, name: "Chopper Base // Experience", Normal: 0.05 },
            { id: 542215, name: "Chopper Base // Shield (Hyperspace)", Normal: 0.12 },
            { id: 542216, name: "Chopper Base // Experience (Hyperspace)", Normal: 0.21 },
            { id: 542217, name: "Command Center // Shield", Normal: 0.04 },
            { id: 542218, name: "Command Center // Experience", Normal: 0.06 },
            { id: 542219, name: "Command Center // Shield (Hyperspace)", Normal: 0.15 },
            { id: 542220, name: "Command Center // Experience (Hyperspace)", Normal: 0.16 },
            { id: 542221, name: "Dagobah Swamp // Shield", Normal: 0.07 },
            { id: 542222, name: "Dagobah Swamp // Experience", Normal: 0.06 },
            { id: 542223, name: "Dagobah Swamp // Shield (Hyperspace)", Normal: 0.18 },
            { id: 542224, name: "Dagobah Swamp // Experience (Hyperspace)", Normal: 0.24 },
            { id: 542225, name: "Echo Base // Shield", Normal: 0.06 },
            { id: 542226, name: "Echo Base // Experience", Normal: 0.06 },
            { id: 542227, name: "Echo Base // Shield (Hyperspace)", Normal: 0.21 },
            { id: 542228, name: "Echo Base // Experience (Hyperspace)", Normal: 0.2 },
            { id: 542229, name: "Kestro City // Shield", Normal: 0.08 },
            { id: 542230, name: "Kestro City // Experience", Normal: 0.08 },
            { id: 542231, name: "Kestro City // Shield (Hyperspace)", Normal: 0.2 },
            { id: 542232, name: "Kestro City // Experience (Hyperspace)", Normal: 0.19 },
            { id: 543170, name: "General Veers - Blizzard Force Commander (Hyperspace)", Foil: 4.2, Normal: 1.32 }
            ],
            'Store Showdown Promos': [
            { id: 542171, name: "Takedown", Normal: 3.25 },
            { id: 542172, name: "Mace Windu - Party Crasher (Champion)", Normal: 201.27 },
            { id: 542173, name: "Mace Windu - Party Crasher (Finalist)", Normal: 33.01 },
            { id: 542174, name: "Mace Windu - Party Crasher (Top 4)", Normal: 14.92 },
            { id: 542175, name: "Mace Windu - Party Crasher (Top 8)", Normal: 13.58 }
            ],
            'Weekly Play Promos': [
            { id: 540613, name: "General Veers - Blizzard Force Commander", Normal: 1.23, Foil: 2.39 },
            { id: 542132, name: "Greedo - Slow on the Draw", Normal: 2.51, Foil: 6.67 },
            { id: 542134, name: "Sabine Wren - Explosives Artist", Foil: 7.89, Normal: 3.56 },
            { id: 542136, name: "Yoda - Old Master", Foil: 5.57, Normal: 2.6 },
            { id: 542139, name: "Resupply", Normal: 2.15, Foil: 5.4 },
            { id: 542143, name: "R2-D2 - Ignoring Protocol (Hyperspace)", Normal: 2.02 },
            { id: 542146, name: "C-3PO - Protocol Droid (Hyperspace)", Normal: 0.63 },
            { id: 542147, name: "Luke's Lightsaber (Hyperspace)", Normal: 0.69 },
            { id: 542151, name: "Admiral Motti - Brazen and Scornful (Hyperspace)", Normal: 0.45 },
            { id: 542158, name: "Grand Moff Tarkin - Death Star Overseer (Hyperspace)", Normal: 0.34 },
            { id: 542159, name: "General Dodonna - Massassi Group Commander", Foil: 3.53, Normal: 1.44 },
            { id: 542160, name: "Bossk - Deadly Stalker", Normal: 2.91, Foil: 4.43 },
            { id: 542161, name: "Death Star Stormtrooper", Normal: 1.88, Foil: 6.15 },
            { id: 542162, name: "Leia Organa - Defiant Princess (Hyperspace)", Normal: 1.35 },
            { id: 542163, name: "I Am Your Father (Hyperspace)", Normal: 0.98 },
            { id: 542164, name: "Vader's Lightsaber (Hyperspace)", Normal: 0.5 },
            { id: 542165, name: "Waylay", Normal: 0.48 },
            { id: 542166, name: "Green Squadron A-Wing", Normal: 0.36 },
            { id: 542168, name: "Battlefield Marine", Normal: 0.41 },
            { id: 542257, name: "Death Trooper", Foil: 3.78, Normal: 1.33 }
            ],
            'Prerelease Promos': [
            { id: 542130, name: "Luke Skywalker - Faithful Friend", Normal: 1.15 },
            { id: 542131, name: "Darth Vader - Dark Lord of the Sith", Normal: 2.09 }
            ],
            'GenCon 2023 Promos': [
            
            ]
            
    };

    // Display login modal by default when the page loads
    loginModal.style.display = 'block';

    // Event listener for the home button click 
    homeButton.addEventListener('click', function() {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the logo click 
    logo.addEventListener('click', function() {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });



    // Event listener for closing the add modal
    closeAddModal.addEventListener('click', function() {
        addModal.style.display = 'none';
    });

    // Event listener for closing the inspect modal
    closeInspectModal.addEventListener('click', function() {
        inspectModal.style.display = 'none';
    });

    // Event listener for the set name selection change event
    cardSetSelect.addEventListener('change', function() {
        const selectedSet = cardSetSelect.value; // Get the selected set name
        const cardNames = (cardData[selectedSet] || []).map(card => card.name); // Get the card names for the selected set
        updateCardNameDatalist(cardNames); // Update the datalist with the card names
    });

    // Function to update the card name datalist
    function updateCardNameDatalist(cardNames) {
        cardNamesDatalist.innerHTML = ''; // Clear the current options
        cardNames.forEach(cardName => {
            const option = document.createElement('option');
            option.value = cardName;
            cardNamesDatalist.appendChild(option); // Add the card name option to the datalist
        });
    }

    // Function to check if an item already exists in the watchlist
    function itemExistsInWatchlist(cardId) {
        const rows = watchlistTable.querySelectorAll('tr');
        for (const row of rows) {
            const cells = row.querySelectorAll('td');
            if (cells[0].dataset.id === String(cardId)) {
                return true;
            }
        }
        return false;
    }

    // Event listener for the search button click event
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert it to lowercase
        const filteredItems = sampleItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        ); // Filter items based on the search term
        displaySearchResults(filteredItems); // Display the filtered search results
    });

    // Event listener for the add form submit event
    addForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        const cardName = cardNameInput.value; // Get card name
        const cardSet = cardSetSelect.value; // Get card set

        // Find the card in the selected set
        const card = (cardData[cardSet] || []).find(c => c.name === cardName);
        if (card) {
            if (itemExistsInWatchlist(card.id)) {
                alert('This card is already in your watchlist.');
                return;
            }
            const newItem = { id: card.id, name: card.name, category: cardSet, price: card.Normal, quantity: 'N/A' };
            addToWatchlist(newItem); // Add to watchlist using the card ID
            saveWatchlist(); // Save the updated watchlist
            addModal.style.display = 'none'; // Close the modal
            addForm.reset(); // Reset the form
        } else {
            alert('Invalid card name selected. Please select a valid card name from the list.');
        }
    });

    // Event listener for the login form submit event
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        loginModal.style.display = 'none'; // Close the login modal
        // Redirect to the home page (scroll to main content)
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the signup form submit event
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const errorMessage = document.getElementById('signup-error');

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            signupModal.style.display = 'none'; // Close the signup modal
            
            // Redirect to the home page (scroll to main content)
            document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Event listener for the switch to signup button click event
    switchToSignupButton.addEventListener('click', function() {
        loginModal.style.display = 'none'; // Close the login modal
        signupModal.style.display = 'block'; // Open the signup modal
    });

    // Function to display search results
    function displaySearchResults(items) {
        const searchSection = document.getElementById('search'); // Get the search section element
        let resultContainer = document.getElementById('search-results'); // Get the current search results container, if it exists

        // Clear previous results if they exist
        if (resultContainer) {
            resultContainer.remove();
        }

        // Create a new container for search results
        resultContainer = document.createElement('div');
        resultContainer.id = 'search-results';
        searchSection.appendChild(resultContainer); // Append the new container to the search section

        // Iterate over each item and create a card for it
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-card'); // Add a class for styling
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="add">Add to Watchlist</button>
            `; // Populate the card with item details
            resultContainer.appendChild(itemDiv); // Add the card to the result container

            // Add listener for the "Add to Watchlist" button
            itemDiv.querySelector('.add').addEventListener('click', function() {
                addToWatchlist(item);
                saveWatchlist(); // Save the updated watchlist
            });
        });
    }

    

    // Function to add a watchlist item
    function addWatchlistItem(card) {
        const row = document.createElement('tr');

        const cardNameCell = document.createElement('td');
        cardNameCell.textContent = card.name;
        row.appendChild(cardNameCell);

        const cardSetCell = document.createElement('td');
        cardSetCell.textContent = card.set;
        row.appendChild(cardSetCell);

        const marketPriceCell = document.createElement('td');
        marketPriceCell.textContent = card.marketPrice !== undefined ? card.marketPrice : 'N/A';
        row.appendChild(marketPriceCell);

        const foilPriceCell = document.createElement('td');
        foilPriceCell.textContent = card.foilPrice !== undefined ? card.foilPrice : 'N/A';
        row.appendChild(foilPriceCell);

        const weekRangeCell = document.createElement('td');
        weekRangeCell.textContent = card.weekRange !== undefined ? card.weekRange : 'N/A';
        row.appendChild(weekRangeCell);

        const actionsCell = document.createElement('td');
        const inspectButton = document.createElement('button');
        inspectButton.textContent = 'Inspect';
        inspectButton.classList.add('inspect');
        actionsCell.appendChild(inspectButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        actionsCell.appendChild(removeButton);

        row.appendChild(actionsCell);

        watchlistTable.appendChild(row);

         // Add event listener for the "Inspect" button
         row.querySelector('.inspect').addEventListener('click', function() {
            showCardDetails(item); // Show card details when inspect button is clicked
        });

        // Add event listener for the "Remove" button
        row.querySelector('.remove').addEventListener('click', function() {
            row.remove(); // Remove the row from the watchlist table
            saveWatchlist(); // Save the updated watchlist
        });
    }

    function renderWatchlist() {
        watchlistTable.innerHTML = ''; 
        for (const set in cardData) {
            if (cardData.hasOwnProperty(set)) {
                cardData[set].forEach(card => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${card.name}</td>
                        <td>${set}</td>
                        <td>${card.Normal ? card.Normal.toFixed(2) : 'N/A'}</td>
                        <td>${card.Foil ? card.Foil.toFixed(2) : 'N/A'}</td>
                        <td>52-Week Range</td>
                        <td>
                            <button class="inspect" data-card-id="${card.id}" data-card-set="${set}">Inspect</button>
                            <button class="remove">Remove</button>
                        </td>
                    `;
                    watchlistTable.appendChild(tr);
                });
            }
        }

        // Attach event listeners for inspect buttons
        document.querySelectorAll('.inspect').forEach(button => {
            button.addEventListener('click', function() {
                const cardId = this.dataset.cardId;
                const cardSet = this.dataset.cardSet;
                showCardDetails(cardId, cardSet);
            });
        });

        // Attach event listeners for remove buttons
        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.parentElement.parentElement;
                row.remove();
            });
        });
    }

    // Add form submission logic
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedSet = cardSetSelect.value;
        const selectedCardName = cardNameInput.value;

        const selectedCard = cardData[selectedSet].find(card => card.name === selectedCardName);
        if (selectedCard) {
            const newCard = {
                name: selectedCard.name,
                set: selectedSet,
                marketPrice: selectedCard.Normal !== undefined ? selectedCard.Normal : 'N/A',
                foilPrice: selectedCard.Foil !== undefined ? selectedCard.Foil : 'N/A',
                weekRange: 'N/A' // Replace this with the actual 52-week range if available
            };
            addWatchlistItem(newCard);
        }
        addModal.style.display = 'none';
    });

    

    // Event listeners for opening and closing modals
    addButton.addEventListener('click', function() {
        addModal.style.display = 'block';
    });

    closeAddModal.addEventListener('click', function() {
        addModal.style.display = 'none';
    });

    // Function to show card details in the inspect modal
    function showCardDetails(cardId, cardSet) {
        const card = cardData[cardSet].find(c => c.id == cardId);
        if (card) {
            cardDetailsDiv.innerHTML = `
                <p><strong>Name:</strong> ${card.name}</p>
                <p><strong>Set:</strong> ${cardSet}</p>
                <p><strong>Normal Price:</strong> ${card.Normal ? card.Normal.toFixed(2) : 'N/A'} USD</p>
                <p><strong>Foil Price:</strong> ${card.Foil ? card.Foil.toFixed(2) : 'N/A'} USD</p>
            `;
            inspectModal.style.display = 'block';
        }
    }

    // Function to save the watchlist to local storage
    function saveWatchlist() {
        const watchlistItems = [];
        watchlistTable.querySelectorAll('tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            watchlistItems.push({
                id: cells[0].dataset.id,
                name: cells[0].innerText,
                category: cells[1].innerText,
                price: cells[2].innerText,
                quantity: cells[3].innerText
            });
        });
        localStorage.setItem('watchlist', JSON.stringify(watchlistItems));
    }
});

