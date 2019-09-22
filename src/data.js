import trumpet from "./images/trumpet.png";
import trombone from "./images/trombone.png";
import frenchhorn from "./images/frenchhorn.png";
import tuba from "./images/tuba.png";
import violin from "./images/violin.png";
import viola from "./images/viola.png";
import cello from "./images/cello.png";
import bass from "./images/bass.png";
import flute from "./images/flute.png";
import clarinet from "./images/clarinet.png";
import sopranosax from "./images/sopranosax.png";
import altosax from "./images/altosax.png";
import tenorsax from "./images/tenorsax.png";
import oboe from "./images/oboe.png";
import bassoon from "./images/bassoon.png";

export default [
    {
        "sys": {"id": "1"},
        "fields": {
            "name": "Trumpet",
            "slug": "trumpet",
            "type": "brass",
            "price": 140,
            "featured": false,
            "description": "A brass instrument is one whose sound is produced by the vibrations of the player's lips as he or she blows into a cup- or funnel-shaped mouthpiece. The vibrations are amplified and colored in a tube that is flared at the end. The trumpet plays in the soprano range and is typically pitched in B-flat.",
            "image": {
                "fields": {
                    "file": {
                        "url": trumpet
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=trumpet&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "2"},
        "fields": {
            "name": "Trombone",
            "slug": "trombone",
            "type": "brass",
            "price": 200,
            "featured": false,
            "description": "A brass instrument is one whose sound is produced by the vibrations of the player's lips as he or she blows into a cup- or funnel-shaped mouthpiece. The vibrations are amplified and colored in a tube that is flared at the end. The typical trombone plays in the baritone to tenor range and is a concert pitch instrument (pitched in C).",
            "image": {
                "fields": {
                    "file": {
                        "url": trombone
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=trombone&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "3"},
        "fields": {
            "name": "French horn",
            "slug": "french-horn",
            "type": "brass",
            "price": 370,
            "featured": true,
            "description": "A brass instrument is one whose sound is produced by the vibrations of the player's lips as he or she blows into a cup- or funnel-shaped mouthpiece. The vibrations are amplified and colored in a tube that is flared at the end. The French horn plays in the tenor to alto range and is typically pitched in F.",
            "image": {
                "fields": {
                    "file": {
                        "url": frenchhorn
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=french+horn&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "4"},
        "fields": {
            "name": "Tuba",
            "slug": "tuba",
            "type": "brass",
            "price": 790,
            "featured": false,
            "description": "A brass instrument is one whose sound is produced by the vibrations of the player's lips as he or she blows into a cup- or funnel-shaped mouthpiece. The vibrations are amplified and colored in a tube that is flared at the end. The typical tuba plays in the bass to tenor range and is a concert pitch instrument (pitched in C). A common variant of the tuba is the Sousaphone which was developed for marching band use by the famous composer John Philip Sousa (1854-1932).",
            "image": {
                "fields": {
                    "file": {
                        "url": tuba
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=tuba&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "5"},
        "fields": {
            "name": "Violin",
            "slug": "violin",
            "type": "string",
            "price": 140,
            "featured": false,
            "description": "A string instrument is one whose sound is produced by the vibration of strings. The most common orchestral string instruments are all concert pitch instruments and they are played with various techniques involving a bow and the fingers. The violin plays in the soprano to sopranino range.",
            "image": {
                "fields": {
                    "file": {
                        "url": violin
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=violin&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "6"},
        "fields": {
            "name": "Viola",
            "slug": "viola",
            "type": "string",
            "price": 190,
            "featured": false,
            "description": "A string instrument is one whose sound is produced by the vibration of strings. The most common orchestral string instruments are all concert pitch instruments and they are played with various techniques involving a bow and the fingers. The viola is slightly larger than the violin and plays in the alto to soprano range.",
            "image": {
                "fields": {
                    "file": {
                        "url": viola
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=viola&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "7"},
        "fields": {
            "name": "Cello",
            "slug": "cello",
            "type": "string",
            "price": 270,
            "featured": false,
            "description": "A string instrument is one whose sound is produced by the vibration of strings. The most common orchestral string instruments are all concert pitch instruments and they are played with various techniques involving a bow and the fingers. The cello is larger than the viola, played in an upright position, and sounds in the baritone to tenor range. In orchestral music, it often doubles the bass part one octave higher.",
            "image": {
                "fields": {
                    "file": {
                        "url": cello
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=cello&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "8"},
        "fields": {
            "name": "Bass",
            "slug": "bass",
            "type": "string",
            "price": 1200,
            "featured": true,
            "description": "A string instrument is one whose sound is produced by the vibration of strings. The most common orchestral string instruments are all concert pitch instruments and they are played with various techniques involving a bow and the fingers. The bass (aka double bass) is larger than the cello, played in an upright position, and sounds in the bass range. In orchestral music, it often doubles the cello part one octave lower.",
            "image": {
                "fields": {
                    "file": {
                        "url": bass
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=double+bass&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "9"},
        "fields": {
            "name": "Flute",
            "slug": "flute",
            "type": "woodwind",
            "price": 85,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. At one time all flutes were made of wood. Today most flutes are made of metal or plastic but they are still categorized as woodwind instruments because of the strength of the historical tradition of wooden flutes. The typical flute is a concert pitch instrument (pitched in C).",
            "image": {
                "fields": {
                    "file": {
                        "url": flute
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=flute&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "10"},
        "fields": {
            "name": "Clarinet",
            "slug": "clarinet",
            "type": "woodwind",
            "price": 120,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. Even though clarinets can be made of wood, plastic, or even metal, they are categorized as woodwind instruments because the sound is created by a single vibrating wooden reed. The typical clarinet is a B-flat instrument but there are variants pitched in C and E-flat as well.",
            "image": {
                "fields": {
                    "file": {
                        "url": clarinet
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=clarinet&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "11"},
        "fields": {
            "name": "Soprano Saxophone",
            "slug": "soprano-saxophone",
            "type": "woodwind",
            "price": 230,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. Even though saxophones are made of brass, they are categorized as woodwind instruments because the sound is created by a vibrating wooden reed. Saxophones were invented by the Belgian instrument maker Adolphe Sax in the early 1840s. The soprano saxophone is a B-flat instrument.",
            "image": {
                "fields": {
                    "file": {
                        "url": sopranosax
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=Soprano+Saxophone&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "12"},
        "fields": {
            "name": "Alto Saxophone",
            "slug": "alto-saxophone",
            "type": "woodwind",
            "price": 240,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. Even though saxophones are made of brass, they are categorized as woodwind instruments because the sound is created by a vibrating wooden reed. Saxophones were invented by the Belgian instrument maker Adolphe Sax in the early 1840s. The alto saxophone is an E-flat instrument.",
            "image": {
                "fields": {
                    "file": {
                        "url": altosax
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=Alto+Saxophone&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "13"},
        "fields": {
            "name": "Tenor Saxophone",
            "slug": "tenor-saxophone",
            "type": "woodwind",
            "price": 390,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. Even though saxophones are made of brass, they are categorized as woodwind instruments because the sound is created by a vibrating wooden reed. Saxophones were invented by the Belgian instrument maker Adolphe Sax in the early 1840s. The tenor saxophone is a B-flat instrument.",
            "image": {
                "fields": {
                    "file": {
                        "url": tenorsax
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=Tenor+Saxophone&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "14"},
        "fields": {
            "name": "Oboe",
            "slug": "oboe",
            "type": "woodwind",
            "price": 400,
            "featured": false,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. An oboe is made of wood and creates its sound using a double vibrating wooden reed. The oboe is a concert pitch instrument (pitched in C).",
            "image": {
                "fields": {
                    "file": {
                        "url": oboe
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=oboe&mode=all&tag=stevenestrellaco"
        }
    },
    {
        "sys": {"id": "15"},
        "fields": {
            "name": "Bassoon",
            "slug": "bassoon",
            "type": "woodwind",
            "price": 1280,
            "featured": true,
            "description": "A woodwind instrument is one whose sound is produced by vibrations of air in a tube. Holes along the length of tube are opened and closed by the fingers, or by pads, to control the pitch. A bassoon is made of wood and creates its sound using a double vibrating wooden reed. The bassoon is a concert pitch instrument (pitched in C).",
            "image": {
                "fields": {
                    "file": {
                        "url": bassoon
                    }
                }
            },
            "shopurl": "https://www.amazon.com/s?k=bassoon&mode=all&tag=stevenestrellaco"
        }
    }
];