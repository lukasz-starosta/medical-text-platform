import stanza

# download and initialize a mimic pipeline with an i2b2 NER model
stanza.download('en', package='mimic', processors={'ner': 'i2b2'})
nlp = stanza.Pipeline('en', package='mimic', processors={'ner': 'i2b2'})

def parse_text(text):
    doc = nlp(text)
    print(doc.entities)
    entities = []
    for ent in doc.entities:
        entities.append({'text': ent.text, 'type': ent.type})

    return entities
